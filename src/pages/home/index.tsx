import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';
import MainHeader from '@/app/_component/atom/MainHeader';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserName = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #333D4B;
`;

const GreetingMessage = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #333D4B;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
 
`;

export default function Home() {
  const userName = "오소현"; // Assume the user name is fetched from an API or context

  return (
    <>
      <MainHeader title="홈" />
      <GreetingContainer>
        <UserName>{userName}님, </UserName>
        <GreetingMessage>반가워요!</GreetingMessage>
      </GreetingContainer>
      <ImageContainer>
        <Image src={Images.ico_home_greet} alt="추천하는 이미지" />
      </ImageContainer>
    </>
  );
}
