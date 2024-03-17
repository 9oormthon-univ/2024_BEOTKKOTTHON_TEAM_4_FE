'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/Vaccine/index';
import { Images } from '@globalStyles';

export default function CertificateList() {
  return (
    <Container>
      <VaccineCard image={Images.vacgom01} />
    </Container>
  );
}
