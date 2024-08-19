import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import Image from 'next/image';
import { Images } from '@globalStyles';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { LocalStorage } from '@/hooks/useUtil';
import CompeleteToast from '@/app/_component/atom/CompeleteToast';
import Link from 'next/link';

const InviteBabyContainer = styled.div`
  display: flex;
  width: 100%;
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
  color: var(--Gray-White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.3px;
`;

const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`;

const IntroText = styled.div`
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex: 1 0 0;
`;

const InputText = styled.div`
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin-top: -20px;
  line-height: normal;
`;

const IntroSubText = styled.div`
  color: var(--Gray-Gray-600, #6b7684);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const CodeBox = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--Gray-Gray-200, #e5e8eb);
  background: var(--Gray-White, #ffffff);
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  font-size: 14px;
  resize: none;
  outline: none;

  &:focus {
    border-radius: 8px;
    border: 1px solid var(--Primary, #4196fd);
    background: var(--Gray-White, #fff);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.3px;
  }
`;

const CodeBoxEmail = styled.textarea`
  width: 100%;
  height: 52px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--Gray-Gray-200, #e5e8eb);
  background: var(--Gray-White, #ffffff);
  color: var(--Gray-Gray-800, #333d4b);
  font-family: Pretendard;
  font-size: 14px;
  resize: none;
  outline: none;

  &:focus {
    border-radius: 8px;
    border: 1px solid var(--Primary, #4196fd);
    background: var(--Gray-White, #fff);
    color: var(--Gray-Gray-900, #191f28);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    letter-spacing: -0.3px;
  }
`;

export default function Ask() {
  const [query, setQuery] = useState('');
  const [emailquery, setEmailQuery] = useState('');

  const handleEmailInputChange = (event) => {
    setEmailQuery(event.target.value);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <MainHeader title="1:1 문의" url="/my" />
      <InviteBabyContainer>
        <IntroContainer>
          <IntroText>
            궁금하신 사항이나 <br /> 문제점을 남겨주세요!
          </IntroText>
          <IntroSubText>
            여러분의 피드백은 백곰 서비스에 큰 도움이 됩니다.
          </IntroSubText>
        </IntroContainer>
      </InviteBabyContainer>
      <InviteBabyContainer>
        <IntroContainer>
          <InputText>이메일</InputText>
          <CodeBoxEmail
            value={emailquery}
            onChange={handleEmailInputChange}
            placeholder="답변 받을 이메일을 입력하기"
          />
        </IntroContainer>
        <IntroContainer>
          <InputText>문의 사항</InputText>
          <CodeBox
            value={query}
            onChange={handleInputChange}
            placeholder="문의 사항 입력하기"
          />
        </IntroContainer>
      </InviteBabyContainer>

      <Link href="/goalask" passHref>
      <ButtonContainer>
        <ButtonText>보내기</ButtonText>
      </ButtonContainer>
      </Link>
    </div>
  );
}
