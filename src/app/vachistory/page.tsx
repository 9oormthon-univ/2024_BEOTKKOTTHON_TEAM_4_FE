'use client';

import * as React from 'react';
import Link from 'next/link';

import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import { MenuTitleContainer } from '@/app/_component/atom/MenuTitle/styles';
import MenuTitle from '@/app/_component/atom/MenuTitle';
import VaccineItem from '@/app/_component/atom/VaccineItem';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { useEffect } from 'react';
import { postVacSignup } from '@/app/_lib/postVacSignup';
import responsJsonNation from '@/utils/user-vacList-api.json';
import responsJsonetc from '@/utils/user-vacList-api.json';

export default function Vachistory() {
  const NationData = responsJsonNation;
  const EtcData = responsJsonetc;

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
          rightIconUrl={'/vachistory/vaccine'}
        />
        <div className="vaccine_wrap">
          <div className="category">국가 예방접종</div>
          <div className="vaccine_list">
            {NationData.map((item, key) => (
              <VaccineItem
                key={key}
                category={'국가 예방접종'}
                vaccineName={item.diseaseName}
                subLabel={item.vaccineName}
                vaccineStatus={item.isCompleted}
              />
            ))}
          </div>
        </div>
        <div className="vaccine_wrap">
          <div className="category">기타 예방접종</div>
          <div className="vaccine_list">
            {NationData.map((item, key) => (
              <VaccineItem
                key={key}
                category={'기타 예방접종'}
                vaccineName={item.diseaseName}
                subLabel={item.vaccineName}
                vaccineStatus={item.isCompleted}
              />
            ))}
          </div>
        </div>
      </div>
      <NavigationFixed />
    </Container>
  );
}
