'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Icons, Images } from '@globalStyles';
import CertificateDetail from '@/app/vachistory/certificate/list/page';
import BackHeader from '@/app/_component/molecule/BackHeader';
import Button from '@/app/_component/atom/button/button';
import Icon from '@/app/_component/atom/Icon/Icon';
import { IconsMetadata } from 'next/dist/lib/metadata/generate/icons';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { LocalStorage } from '@/hooks/useUtil';
import { getInoculationDetail } from '@/app/_lib/getInoculationDetail';
import { useEffect, useState } from 'react';
import {
  getCertificateDetail,
  getRatio,
} from '@/app/_lib/getCertificateDetail';

export default function CertificateDetail() {
  const vaccineId = LocalStorage.getItem('vaccineId');
  const [detail, setDetail] = useState('');
  const fetchDetail = async () => {
    try {
      const detailData = await getCertificateDetail(vaccineId);
      setDetail(detailData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(detail);
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <Container>
      <BackHeader title={'접종 상세'} url={'/vachistory/certificate/list'} />
      <div className="container">
        <VaccineCard
          image={Images.vacgom01}
          variant={'large'}
          definition
          subLabel
        />
        <Button
          prevIcon={Icons.share}
          label={'이미지 공유'}
          variant={'OutlineWhite'}
          size={'large'}
        />
      </div>
    </Container>
  );
}
