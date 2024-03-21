'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Images } from '@globalStyles';
import BackHeader from '@/app/_component/molecule/BackHeader';
import { useRouter } from 'next/navigation';

export default function CertificateList(): React.JSX.Element {
  const router = useRouter();
  const onClickHandler = (id: string) => {
    router.push(`/vachistory/certificate/${id}`);
  };

  const certificateData = [
    { vaccineName: 'B형간염', date: '2024.03.15', id: '1' },
    { vaccineName: '디프테리아/파상풍/백일해', date: '2024.03.15', id: '2' },
    { vaccineName: '폴리오', date: '2024.03.15', id: '3' },
  ];

  return (
    <Container>
      <BackHeader title={'접종 인증서'} url={'/vachistory'} />
      <div className="container">
        {certificateData.map((card, index) => (
          <VaccineCard
            key={index}
            variant={'small'}
            image={Images.vacgom01}
            vaccineName={card.vaccineName}
            date={card.date}
            onClick={() => onClickHandler(card.id)}
          />
        ))}
      </div>
    </Container>
  );
}
