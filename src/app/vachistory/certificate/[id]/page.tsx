'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import BackHeader from '@/app/_component/molecule/BackHeader';
import { LocalStorage } from '@/hooks/useUtil';
import { useEffect, useState } from 'react';
import { getCertificateDetail } from '@/app/_lib/getCertificateDetail';
import { apiDevUrl } from '@/hooks/api';

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
  const [userName, setUserName] = useState('');
  const accessToken = LocalStorage.getItem('accessToken');

  useEffect(() => {
    fetch(`${apiDevUrl}/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserName(data.name);
      })
      .catch((error) => {
        // setError(error.message);
      });
  }, []);

  console.log(detail);
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <Container>
      <BackHeader title={'접종 상세'} url={'/vachistory/certificate/list'} />
      <div className="container">
        <VaccineCard
          image={detail?.iconImage}
          variant={'large'}
          vaccineName={detail?.vaccineName}
          diseaseName={detail?.diseaseName}
          date={detail?.inoculatedDate}
          definition
          account_id={userName}
          subLabel
        />
        {/*<Button*/}
        {/*  prevIcon={Icons.share}*/}
        {/*  label={'이미지 공유'}*/}
        {/*  variant={'OutlineWhite'}*/}
        {/*  size={'large'}*/}
        {/*/>*/}
      </div>
    </Container>
  );
}
