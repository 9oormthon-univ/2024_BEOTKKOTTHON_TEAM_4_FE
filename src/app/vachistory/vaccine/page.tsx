'use client';

import * as React from 'react';
import { Container } from './style';
import { Icons, Images } from '@/styles';

import { extraDisease, nationDisease } from '@/constants';
import { Fragment, useEffect, useState } from 'react';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { css } from '@emotion/react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import VaccineDetail from '@/app/_component/atom/VaccineDetail';
import VaccineStatus from '@/app/_component/atom/VaccineStatus';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { getInoculationSimple } from '@/app/_lib/getInoculationSimple';
import { getInoculationDetail } from '@/app/_lib/getInoculationDetail';
import { PATH } from '@/routes/path';

interface ListDataType {
  vaccineName: string;
  inoculationOrders: [];
  orderString: string;
  diseaseName: string;
  minOrder: number;
  maxOrder: number;
  isCompleted: boolean;
}
interface DetailDataType {
  order: string;
  vaccineProductName: string;
  vaccineBrandName: string;
  date: string;
  agency: string;
  lotNumber: string;
}

export default function Vaccine() {
  const [params, setParams] = useState<ParamsType>({
    disease: '전체',
  });
  const [selectedSection, setSelectedSection] =
    useState<string>('국가예방접종');
  const sectionTexts = ['국가예방접종', '기타예방접종'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('nation');
  const [list, setList] = useState<ListDataType[]>([]);
  const [detail, setDetail] = useState<DetailDataType[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const handleAgencySelect = (selectedOptions: string) => {
    onChangeValue('disease', selectedOptions);
    setIsModalOpen(false);
  };

  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (selectedSection === '국가예방접종') {
      setType('nation');
    } else {
      setType('extra');
    }
  }, [selectedSection]);

  const resetAgencyOptions = () => {
    onChangeValue('disease', []);
  };

  const fetchList = async () => {
    try {
      const listData = await getInoculationSimple(type);
      setList(listData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchDetail = async () => {
    try {
      const detailData = await getInoculationDetail(type, params.disease);
      setDetail(detailData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [params.disease]);
  useEffect(() => {
    setParams({ disease: '전체' });
    fetchList();
    Promise.all([fetchList()]).then(() => {
      setLoading(false);
    });
  }, [type]);

  return (
    <Container>
      <BackHeader title={'예방접종 내역'} url={PATH.VACHISTORY} />
      <SectionHeader
        sections={sectionTexts}
        onSectionChange={setSelectedSection}
      />
      <div className="body">
        <InputForm
          placeholder="병명"
          value={params.disease}
          rightIcon={Icons.arrow_down}
          type="text"
          customStyle={css`
            & > .input__content > .input__content--right__icon > img {
              width: 24px;
              height: 24px;
            }
          `}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />

        {params.disease === '전체' ? (
          <div className="content_wrap">
            {list.map((item, key) => (
              <VaccineStatus
                vaccineType={item.vaccineName}
                diseaseName={item.diseaseName}
                maxOrder={item.maxOrder}
                minOrder={item.minOrder}
                inoculationOrders={item.inoculationOrders}
                isCompleted={item.isCompleted}
                onClick={() => onChangeValue('disease', item.diseaseName)}
              />
            ))}
          </div>
        ) : (
          <div className="content_wrap">
            {detail.map((item, key) => (
              <VaccineDetail
                vaccineDose={item.order}
                vaccineProductName={item.vaccineProductName}
                vaccineBrandName={item.vaccineBrandName}
                inoculatedAt={item.date}
                inoculationAgency={item.agency}
                lotNo={item.lotNumber}
              />
            ))}
          </div>
        )}
      </div>
      {!loading && (
        <div className="bottom">
          예방접종등록사업을 시작한, 2002년 이후의 예방접종기록을 확인할 수
          있어요
        </div>
      )}
      <Fragment>
        {selectedSection === '국가예방접종' ? (
          <FilterRadioModal
            isOpen={isModalOpen}
            title="병명"
            options={nationDisease}
            selectedOptions={params.disease}
            onClose={() => setIsModalOpen(false)}
            onOptionSelect={handleAgencySelect}
            onReset={resetAgencyOptions}
          />
        ) : (
          <FilterRadioModal
            isOpen={isModalOpen}
            title="병명"
            options={extraDisease}
            selectedOptions={params.disease}
            onClose={() => setIsModalOpen(false)}
            onOptionSelect={handleAgencySelect}
            onReset={resetAgencyOptions}
          />
        )}
      </Fragment>
    </Container>
  );
}
