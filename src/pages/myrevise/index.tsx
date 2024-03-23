import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Image from 'next/image';
import { Images } from '@globalStyles';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  padding: 24px 0px;
  opacity: 1;
`;

const ContextContainer= styled.div`
  margin-bottom: 60px;
`;
const FormSection = styled.div`
  padding: 10px;
`;

const FormItemLabel = styled.label`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: left;
  color: #333D4B;
  display: block;
  margin-bottom: 10px;
`;

const FormDisplay = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 8px;
  border: 1px solid #E5E8EB;
  background-color: #F9FAFB;
  font-color: #8B95A1;
  color: #333D4B;
  display: flex;
  align-items: center;
  opacity: 1;
`;

const DropdownContainer = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #E5E8EB;
  background-color: #FFFFFF; 
  margin-bottom: 10px;
  opacity: 1;
  color: #000000;
`;

export default function Myrevise() {
  const userName = "사용자 이름";
  const userNickname = "사용자 닉네임";

  return (
    <div>
      <MainHeader title="내 정보 수정" url="/my" />
      <ImageWrapper>
        <Image src={Images.ico_my_profile} alt="" width={100} height={100} />
      </ImageWrapper>
      <ContextContainer>
      <FormSection>
        <FormItemLabel htmlFor="username">이름</FormItemLabel>
        <FormDisplay>{userName}</FormDisplay>
      </FormSection>
      <FormSection>
        <FormItemLabel htmlFor="nickname">닉네임</FormItemLabel>
        <FormDisplay>{userNickname}</FormDisplay>
      </FormSection>
      <FormSection>
        <FormItemLabel>기저 질환</FormItemLabel>
        <DropdownContainer>
          <span>선택하세요</span>
          <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
        </DropdownContainer>
      </FormSection>
      <FormSection>
        <FormItemLabel>임신 여부</FormItemLabel>
        <DropdownContainer>
          <span>선택하세요</span>
          <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
        </DropdownContainer>
      </FormSection>
      <FormSection>
        <FormItemLabel>의료기관 종사자 여부</FormItemLabel>
        <DropdownContainer>
          <span>선택하세요</span>
          <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
        </DropdownContainer>
      </FormSection>
      <FormSection>
        <FormItemLabel>장기이식 경험 여부</FormItemLabel>
        <DropdownContainer>
          <span>선택하세요</span>
          <Image src={Images.ico_dropdown} alt="" width={24} height={24} />
        </DropdownContainer>
      </FormSection>
      </ContextContainer>
      <NavigationFixed />
    </div>
  );
}