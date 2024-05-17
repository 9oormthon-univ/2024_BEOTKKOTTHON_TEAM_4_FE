'use client';

import * as React from 'react';
import { Container } from './style';
import { Icons, Images } from '@/styles';

import {
  ageRanges,
  extraDisease,
  nationDisease,
  situationRanges,
} from '@/constants';
import { Fragment, useEffect, useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import BackHeader from '@/app/_component/molecule/BackHeader';

import { OnChangeValueType, ParamsType } from '@/types/globalType';

import VaccineStatus from '@/app/_component/atom/VaccineStatus';
import { getInoculationSimple } from '@/app/_lib/getInoculationSimple';
import { PATH } from '@/routes/path';
import Image from 'next/image';
import Filter from '@/app/_component/atom/Filter';
import { essentialDiseaseList } from '@/utils/essential-disease-api';
import styled from '@emotion/styled';
import FilterModal from '@/app/_component/organism/filterModal';
import { useRouter } from 'next/navigation';
import { LocalStorage } from '@/hooks/useUtil';

interface ListDataType {
  vaccineName: string;
  inoculationOrders: [];
  vaccineId: string;
  diseaseId: string;
  orderString: string;
  diseaseName: string;
  minOrder: number;
  maxOrder: number;
  isCompleted: boolean;
}
const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  //flex-wrap: nowrap;
  overflow-y: auto;
  align-items: center;
  gap: 6px;
  margin: 14px 0 14px 14px;
  padding-right: 14px;

  z-index: 1000;
  button {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default function Vaccine() {
  const [params, setParams] = useState<ParamsType>({
    disease: ['전체'],
  });
  const [selectedSection, setSelectedSection] =
    useState<string>('국가예방접종');
  const sectionTexts = ['국가예방접종', '기타예방접종'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('NATION');
  const [list, setList] = useState<ListDataType[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const router = useRouter();

  useEffect(() => {
    if (selectedSection === '국가예방접종') {
      setType('NATION');
    } else {
      setType('EXTRA');
    }
  }, [selectedSection]);

  const fetchList = async () => {
    try {
      const listData = await getInoculationSimple(type, params.disease);
      setList(listData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setParams({ disease: ['전체'] });
    fetchList();
    Promise.all([fetchList()]).then(() => {
      setLoading(false);
    });
  }, [type, selectedSection]);

  useEffect(() => {
    fetchList();
  }, [params]);

  const handleAgencySelect = (selectedOptions: string[]) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option !== '전체',
    );
    setParams({ disease: updatedOptions });

    setIsModalOpen(false);
  };

  const resetAgencyOptions = (item: string) => {
    const updatedDisease = params.disease.filter((d) => d !== item);
    if (params.disease.length === 1) {
      setParams({ disease: ['전체'] });
    } else {
      setParams({ disease: updatedDisease });
    }
  };

  const handleClickDetail = (vaccineId: string) => {
    LocalStorage.setItem('vacType', type);
    LocalStorage.setItem('diseaseId', vaccineId);
    router.push(PATH.VACHISTORY_VAC + '/' + vaccineId);
  };

  return (
    <Container>
      <BackHeader title={'예방접종 내역'} url={PATH.VACHISTORY} />
      <SectionHeader
        sections={sectionTexts}
        onSectionChange={setSelectedSection}
      />
      <FiltersContainer>
        <Image
          src={
            params.disease[0] === '전체'
              ? Images.adjustment_unselec
              : Images.adjustment_selec
          }
          alt="Filter Icon"
          width={24}
          height={24}
        />
        {params.disease.map((item) => {
          return (
            <Filter
              label={''}
              selectedValue={item}
              onSelect={() => setIsModalOpen(true)}
              onClear={() => resetAgencyOptions(item)}
              isSelected={params.disease[0] !== '전체'}
            />
          );
        })}
      </FiltersContainer>
      <div className="body">
        <div className="content_wrap">
          {list.map((item, key) => (
            <VaccineStatus
              vaccineType={item.vaccineName}
              diseaseName={item.diseaseName}
              maxOrder={item.maxOrder}
              minOrder={item.minOrder}
              inoculationOrders={item.inoculationOrders}
              isCompleted={item.isCompleted}
              onClick={() => handleClickDetail(item.vaccineId)}
            />
          ))}
        </div>
      </div>
      {!loading && (
        <div className="bottom">
          예방접종등록사업을 시작한, 2002년 이후의 예방접종기록을 확인할 수
          있어요
        </div>
      )}
      <Fragment>
        <FilterModal
          isOpen={isModalOpen}
          title="병명"
          options={
            selectedSection === '국가예방접종' ? nationDisease : extraDisease
          }
          selectedOptions={params.disease}
          onClose={() => setIsModalOpen(false)}
          onOptionSelect={handleAgencySelect}
          onReset={resetAgencyOptions}
        />
      </Fragment>
    </Container>
  );
}
