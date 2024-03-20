'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Images } from '@globalStyles';
import BackHeader from '@/app/_component/molecule/BackHeader';

export default function CertificateList(): React.JSX.Element {
  const onClickHandler = () => {};
  return (
    <Container>
      <BackHeader title={'접종 인증서'} url={'/vachistory'} />
      <div className="container">
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
        <VaccineCard variant={'small'} image={Images.vacgom01} />
      </div>
    </Container>
  );
}
