'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import BackHeader from '@/app/_component/molecule/BackHeader';
import { LocalStorage } from '@/hooks/useUtil';
import { useEffect, useState } from 'react';
import { getCertificateDetail } from '@/app/_lib/getCertificateDetail';
import { apiDevUrl } from '@/hooks/api';
import { PATH } from '@/routes/path';
import Button from '@/app/_component/atom/button/button';
import { Icons } from '@/styles';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';

type DetailDataType = {
  diseaseName: string;
  iconImage: string;
  inoculatedDate: string;
  userId: string;
  vaccineId: string;
  vaccineName: string;
  type?: 'NATION' | 'EXTRA' | 'EVENT';
};

export default function CertificateDetail() {
  const vaccineId = LocalStorage.getItem('vaccineId');
  const [detail, setDetail] = useState<DetailDataType>({});
  const fetchDetail = async () => {
    try {
      const detailData = await getCertificateDetail(vaccineId);
      setDetail(detailData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [userName, setUserName] = useState('');
  const [shareImage, setShareImage] = useState('');
  const accessToken = LocalStorage.getItem('accessToken');

  const fetchMe = async () => {
    try {
      const response = await fetch(`${apiDevUrl}/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUserName(data.name);
    } catch (error) {
      // setError(error.message);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await fetch(
        `${apiDevUrl}/inoculation/certificate/${detail.vaccineId}/image`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'image/png',
          },
        },
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '백곰접종인증서.png');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      // 이미지를 File 객체로 변환
      const file = new File([blob], 'certificate.png', { type: 'image/png' });

      // 이미지를 공유할 데이터 설정
      const shareData = {
        title: 'Example File',
        files: [file],
      };

      await navigator.share(shareData);

      setShareImage(blob);
    } catch (error) {
      // setError(error.message);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const [text, setText] = useState('');

  const shareHandler = async () => {
    fetchImage();
  };

  console.log(detail);
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <Container>
      <BackHeader title={'접종 상세'} url={PATH.VACHISTORY_LIST} />
      <div className="container">
        <VaccineCard
          image={detail?.iconImage}
          variant={'large'}
          vaccineName={`${detail.diseaseName}(${detail.vaccineName})`}
          diseaseName={detail?.diseaseName}
          date={detail?.inoculatedDate}
          definition
          account_id={userName}
          type={detail?.type}
          subLabel
        />
        <Button
          prevIcon={Icons.share}
          label={'이미지 공유'}
          variant={'OutlineWhite'}
          size={'large'}
          onClick={shareHandler}
        />
      </div>
      {text && <WarningToastWrap errorMessage={text} />}
    </Container>
  );
}
