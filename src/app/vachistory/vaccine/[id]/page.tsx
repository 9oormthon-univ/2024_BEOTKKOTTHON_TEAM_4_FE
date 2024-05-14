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
import InputForm from '@/app/_component/atom/InputForm';
import { css } from '@emotion/react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import VaccineDetail from '@/app/_component/atom/VaccineDetail';
import VaccineStatus from '@/app/_component/atom/VaccineStatus';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { getInoculationSimple } from '@/app/_lib/getInoculationSimple';
import { getInoculationDetail } from '@/app/_lib/getInoculationDetail';
import { PATH } from '@/routes/path';
import Image from 'next/image';
import Filter from '@/app/_component/atom/Filter';
import { essentialDiseaseList } from '@/utils/essential-disease-api';
import styled from '@emotion/styled';
import FilterModal from '@/app/_component/organism/filterModal';

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
    disease: ['전체'],
  });

  const [type, setType] = useState('nation');
  const [detail, setDetail] = useState<DetailDataType[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const detailData = await getInoculationDetail(type, params.disease);
      setDetail(detailData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [params.disease]);

  useEffect(() => {
    setParams({ disease: ['전체'] });
  }, [type]);

  return (
    <Container>
      <BackHeader title={' '} url={PATH.VACHISTORY_VAC} />
      <div className={'top'}>
        <div className={'title'}>
          접종한 백신 정보에 대해
          <br />
          알려드릴게요
        </div>
        <div className={'subTop'}>
          접종기관, 백신명, 제조사, 로트번호에 대해 알 수 있어요!
        </div>
      </div>
      <div className="body">
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
      {!loading && (
        <div className="bottom">
          예방접종등록사업을 시작한, 2002년 이후의 예방접종기록을 확인할 수
          있어요
        </div>
      )}
    </Container>
  );
}
