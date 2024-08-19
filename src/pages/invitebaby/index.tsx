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

const ButtomContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
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
  color: var(--Gray-Gray-800, #333D4B);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex: 1 0 0;
`;

const InputText = styled.div`
  color: var(--Gray-Gray-800, #333D4B);
  font-family: Pretendard;
  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CodeBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Gray-Gray-200, #E5E8EB);
  background: var(--Gray-White, #FFF);
`;


const AgreeContainer = styled.div`
display: flex;
  position: fixed;
  bottom: 80px;

padding: 18px 20px;
flex-direction: column;
align-items: flex-start;
gap: 14px;
`

const AgreeTitle = styled.div`
align-self: stretch;
color: var(--Gray-Gray-500, #8B95A1);
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 140%;
letter-spacing: -0.54px;
`
const AgreeSub = styled.div`
align-self: stretch;
color: var(--Gray-Gray-500, #8B95A1);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 140%;
letter-spacing: -0.48px;
`

const AgreeLink = styled.div`
color: var(--Gray-Gray-400, #B0B8C1);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 140%;
letter-spacing: -0.48px;
text-decoration-line: underline;
`

const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 66px;
  padding: 15px 20px;
  background-color: #E5F0FF;
  border-radius: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 10;
  margin-bottom:60px;
`;

const ToastImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  text-align: left;
`;

const CurrectToast = ({ isVisible }) => {
  return (
    <ToastContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <div style={{ fontFamily: 'Pretendard', fontSize: '16px', fontWeight: '600', lineHeight: '20px', color: '#4196fd' }}>
      <ToastImage src="/assets/ico/ico-checkbox-selected-enabled.svg" alt="Checked Icon" />
      현재는 초대코드가 유효하지 않습니다.
      </div>
    </ToastContainer>
  );
};


export default function InviteBaby() {
  const [invitationCode] = useState("ABCD1234");
  const codeRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    const text = codeRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, (err) => {
      console.error('클립보드 복사 실패:', err);
    });
  };

  return (
    <div>
      <MainHeader title="돌보미 초대하기" url="/my" />
      <InviteBabyContainer>
        <IntroContainer>
          <IntroText>초대 코드를 복사하고, <br/> 회원가입 시 입력해주세요.</IntroText>
        </IntroContainer>
      </InviteBabyContainer>
      <InviteBabyContainer>
        <IntroContainer>
          <InputText>초대 코드</InputText><br/>
          <CodeBox ref={codeRef}>{invitationCode}</CodeBox>
        </IntroContainer>
      </InviteBabyContainer>
      <AgreeContainer>
        <AgreeTitle>
        초대 전에 확인해요
        </AgreeTitle>
        <AgreeSub>
        공동 돌보미를 초대하기 전에 신중하게 고민하고 아이의 개인정보를 공유할 수 있는 사람만 초대해 주세요.
        </AgreeSub>
        <AgreeLink>
        백곰 개인정보 수집 및 활용 동의 약관
        </AgreeLink>
      </AgreeContainer>
      <ButtonContainer onClick={copyToClipboard}>
          <ButtonText>동의하고 초대코드 복사하기</ButtonText>
      </ButtonContainer>
      <CurrectToast isVisible={showToast} />
    </div>
  );
}
