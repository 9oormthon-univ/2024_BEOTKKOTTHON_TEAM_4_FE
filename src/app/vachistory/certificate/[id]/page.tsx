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

export default function CertificateDetail() {
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
