import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';
import { LocalStorage } from '@/hooks/useUtil';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  opacity: 1;
  margin-top:50px
  margin-bottom: 60px;
`;

const CautionItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-bottom: 1px solid #E5E8EB;
  border-radius: 14px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
  opacity: 1;
  margin-bottom: 10px;
`;

const CautionText = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #333D4B;
  white-space: pre-line;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  padding: 20px 140px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const PrimaryButton = styled(Button)`
  background: #4196FD;
  color: #ffffff;
  border: none;
`;

const SecondaryButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #E5E8EB;
`;

export default function Quit() {
  const router = useRouter();
  const accessToken = LocalStorage.getItem('accessToken');

  const handleAccountDeletion = async () => {
    try {
      const response = await fetch('https://api-dev.vacgom.co.kr/api/v1/me', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      router.push('/seeagain').then(() => {
        setTimeout(() => {
          router.push('/');
        }, 3000);
      });
    } catch (error) {
      console.error('Account deletion failed:', error);
    }
  };

  return (
    <div>
      <MainHeader title="계정 탈퇴" url="/my" />
      <ImageWrapper>
        <Image src={Images.ico_quit_intro} alt="" />
      </ImageWrapper>
      <CautionItem>
        <Image src={Images.ico_quit} alt="" />
        <CautionText>회원님에게 꼭 맞는 백신을{"\n"}추천받을 수 없어요</CautionText>
      </CautionItem>
      <CautionItem>
        <Image src={Images.ico_quit} alt="" />
        <CautionText>회원님 근처의 지정의료기관을{"\n"}조회할 수 없어요</CautionText>
      </CautionItem>
      <CautionItem>
        <Image src={Images.ico_quit} alt="" />
        <CautionText>백신만의 백신 인증서를{"\n"}발급받을 수 없어요</CautionText>
      </CautionItem>
      <PrimaryButton onClick={() => window.location.href = '/home'}>홈으로 이동</PrimaryButton>
      <SecondaryButton onClick={handleAccountDeletion}>계정 탈퇴</SecondaryButton>
    </div>
  );
}
