'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/Vaccine/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import Link from 'next/link';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import { MenuTitleContainer } from '@/app/_component/atom/MenuTitle/styles';
import MenuTitle from '@/app/_component/atom/MenuTitle';

export default function Vachistory() {
  return (
    <Container>
      <MainHeader title="접종내역" />
      <div className="body_wrap">
        <div className="content_head">
          <MenuTitle
            title={'접종 인증서'}
            rightIconUrl={'/vachistory/certificate/list'}
          />
        </div>
        <div className="content_body">
          <VaccineCard variant={'small'} image={Images.vacgom01} />
          <VaccineCard variant={'small'} image={Images.vacgom01} />
          <VaccineCard variant={'small'} image={Images.vacgom01} />
          <VaccineCard variant={'small'} image={Images.vacgom01} />
          <VaccineCard variant={'small'} image={Images.vacgom01} />
        </div>

        <MenuTitle
          username="전예나"
          title={'님의 예방접종내역을 확인해보세요!'}
          rightIconUrl={'/vachistory/vaccine/national'}
        />
      </div>
    </Container>
  );
}
