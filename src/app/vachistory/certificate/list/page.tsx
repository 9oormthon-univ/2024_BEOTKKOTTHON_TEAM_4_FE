'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/Vaccine/index';
import { Images } from '@globalStyles';
import BackHeader from '@/app/_component/molecule/BackHeader';

export default function CertificateList(): React.JSX.Element {
  const onClickHandler = () => {};
  return (
    <Container>
      <BackHeader title={'백신 인증서'} url={'/vachistory'} />
      <div className="container">
        <div className="item">백신인증서</div>
        <div className="item">백신인증서</div>
        <div className="item">백신인증서</div>
        <div className="item">백신인증서</div>
        <div className="item">백신인증서</div>
      </div>
    </Container>
  );
}
