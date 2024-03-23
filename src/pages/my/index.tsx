import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import MainMap from '@/app/_component/organism/mainMap';
import NavigationFixed from '@/app/_component/organism/navigationFixed';



const MainHomeContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -50px;
`;

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


export default function My() {
  const userName = '오소현';
  return (
    <>
      <MainHeader title="마이페이지" />
      <GreetingContainer>
          <UserName>{userName}님, </UserName>
          <GreetingMessage>반가워요!</GreetingMessage>
        </GreetingContainer>
        <ImageContainer>
          <Image src={Images.ico_my_docs} alt="" />
          <Image src={Images.ico_my_recom} alt="" />
        </ImageContainer>
      <MainHomeContainer>
      <MainMap/>
      </MainHomeContainer>
      <NavigationFixed/>
    </>
  );
}
