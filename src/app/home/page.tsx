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

import HomeDiseaseCard from '@/app/_component/atom/HomeDiseaseCard';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoneHome from '@/app/_component/atom/NoneHome';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserName = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #333d4b;
`;

const GreetingMessage = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #333d4b;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default function Home() {
  const userName = '오소현';

  const recommendVaccine = [
    { id: 1, iconsImage: Images.ico_vac1, vacName: '결핵' },
    { id: 2, iconsImage: Images.ico_vac2, vacName: 'B형간염' },
    { id: 3, iconsImage: Images.ico_vac3, vacName: '디프테리아' },
    { id: 4, iconsImage: Images.ico_vac4, vacName: '폴리오' },
    { id: 5, iconsImage: Images.ico_vac5, vacName: 'b형헤모필루스인플루엔자' },
  ];

  const failedVaccine = [
    { id: 6, iconsImage: Images.ico_vac6, vacName: '폐렴구균 감염증' },
    { id: 7, iconsImage: Images.ico_vac7, vacName: '홍역' },
    { id: 8, iconsImage: Images.ico_vac8, vacName: '수두' },
    { id: 9, iconsImage: Images.ico_vac9, vacName: '일본뇌염' },
    { id: 10, iconsImage: Images.ico_vac10, vacName: '인플루엔자' },
  ];

  return (
    <>
      <Container>
        <MainHeader title="홈" />
        <GreetingContainer>
          <UserName>{userName}님, </UserName>
          <GreetingMessage>반가워요!</GreetingMessage>
        </GreetingContainer>
        <ImageContainer>
          <Image src={Images.ico_home_greet} alt="추천하는 이미지" />
        </ImageContainer>
        {/* 추천된 백신 섹션 */}
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle title={`${userName}님을 위한 추천 백신`} rightIconUrl={'/recomvac'} />
          </div>
          <div className="content_body">
            {recommendVaccine.length > 0 ? (
              recommendVaccine.map((disease) => (
                <HomeDiseaseCard key={disease.id} diseaseName={disease.vacName} imageUrl={disease.iconsImage} />
              ))
            ) : (
              <NoneHome title="앗! 추천 백신이 없어요" />
            )}
          </div>
        </div>
        {/* 누락된 백신 섹션 */}
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle title="누락된 백신" rightIconUrl={'/failvac'} />
          </div>
          <div className="content_body">
            {failedVaccine.length > 0 ? (
              failedVaccine.map((disease) => (
                <HomeDiseaseCard key={disease.id} diseaseName={disease.vacName} imageUrl={disease.iconsImage} />
              ))
            ) : (
              <NoneHome title="앗! 누락된 백신이 없어요" />
            )}
          </div>
        </div>
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle title="접종 인증서" rightIconUrl={'/vachistory/certificate/list'} />
          </div>
          <div className="content_body">
          {/* 접종 인증서 있을 때 */}
          {/* <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} /> */}
            <NoneHome title="앗! 접종 인증서가 없어요" />
          </div>
        </div>
        <NavigationFixed />
      </Container>
    </>
  );
}
