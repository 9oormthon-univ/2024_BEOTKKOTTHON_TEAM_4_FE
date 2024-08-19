import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';
import Link from 'next/link';

const MapHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const InfoTitle = styled.div`
  color: var(--Gray-Gray-800, #333d4b);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;

const InfoSub = styled.div`
  color: var(--Gray-Gray-600, #6b7684);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
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
  color: var(--Gray-White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

export default function GoalAsk() {
  return (
    <>
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_my_success} alt="" />
        </ImageContainer>
        <InfoContainer>
          <InfoTitle>문의가 등록되었습니다</InfoTitle>
          <InfoSub>
            해당 문의내용에 대한 답변은 <br />
            등록하신 이메일 주소로 3일 이내로 보내드리겠습니다!
          </InfoSub>
        </InfoContainer>
      </MapHomeContainer>
      <Link href="/my" passHref>
      <ButtonContainer>
        <ButtonText>마이 페이지로 이동</ButtonText>
      </ButtonContainer>
      </Link>
    </>
  );
}
