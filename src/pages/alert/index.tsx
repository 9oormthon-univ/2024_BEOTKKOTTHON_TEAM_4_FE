import React from 'react';
import BackRouteHeader from '@/app/_component/atom/BackRouterHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';

const Greeting = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  color: #333D4B;
`;


export default function alert() {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const userName = "오소현";

  return (
    <div>
      <BackRouteHeader title="알람" onBack={handleBackButtonClick} />
      <NavigationFixed />
    </div>
  );
}