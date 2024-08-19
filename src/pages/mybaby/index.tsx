import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Image from 'next/image';
import { Images } from '@globalStyles';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { LocalStorage } from '@/hooks/useUtil';
import CompeleteToast from '@/app/_component/atom/CompeleteToast';
import Link from "next/link";

const MyBabyContainer = styled.div`
display: flex;
width:100%;
padding: 8px 0px 14px 0px;
flex-direction: column;
align-items: flex-start;
`;


const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Primary, #4196fd);
`;


const ButtonText = styled.div`
color: var(--Gray-White, #FFF);
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 100% */
letter-spacing: -0.3px;
`;

const NoListContainer = styled.div`
display: flex;
padding: 60px 32px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
align-self: stretch;
`;

const SubText = styled.div`
color: var(--Gray-Gray-800, #333D4B);
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
align-self: stretch;
`;

export default function MyBaby() {

  return (
    <div>
      <MainHeader title="우리아이 공동 돌보미" url="/my" />
      <MyBabyContainer>
        <NoListContainer>
      <Image src={Images.ico_my_baby_list} alt="" />
      <SubText>아이를 함께 돌볼 <br/> 돌보미를 추가해주세요</SubText>
      </NoListContainer>
      </MyBabyContainer>
      <ButtonContainer>
      <Link href="/invitebaby" passHref>
        <ButtonText>관리자 초대하기</ButtonText>
        </Link>
      </ButtonContainer>
    </div>
  );
}
