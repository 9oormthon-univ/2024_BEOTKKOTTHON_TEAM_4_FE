'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Images } from '@globalStyles';
import CertificateDetail from '@/app/vachistory/certificate/list/page';

export default function CertificateDetail() {
  return (
    <Container>
      <VaccineCard image={Images.vacgom01} />
    </Container>
  );
}
