import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';
import MainHeader from '@/app/_component/atom/MainHeader';
import MenuTitle from '@/app/_component/atom/MenuTitle';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { Container } from './style';

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
        <NavigationFixed />
      </Container>
    </>
  );
}
