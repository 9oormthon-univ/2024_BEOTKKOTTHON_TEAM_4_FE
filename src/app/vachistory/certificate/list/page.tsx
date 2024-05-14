'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Images } from '@globalStyles';
import BackHeader from '@/app/_component/molecule/BackHeader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCertificate } from '@/app/_lib/getCertificate';
import { LocalStorage } from '@/hooks/useUtil';

export default function CertificateList(): React.JSX.Element {
  const router = useRouter();
  const onClickHandler = (id: string) => {
    LocalStorage.setItem('vaccineId', id);
    router.push(`/vachistory/certificate/${id}`);
  };
  const [CertificateData, setCertificateData] = useState([]);
  const fetchCertifi = async () => {
    try {
      const certificateData = await getCertificate();
      setCertificateData(certificateData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchCertifi();
  }, []);

  return (
    <Container>
      <BackHeader title={'접종 인증서'} url={'/vachistory'} />
      <div className="container">
        {CertificateData.map((card, index) => (
          <VaccineCard
            key={index}
            variant={'small'}
            image={card.iconImage}
            vaccineName={card.vaccineName}
            date={card.inoculatedDate}
            onClick={() => onClickHandler(card.vaccineId)}
          />
        ))}
      </div>
    </Container>
  );
}
