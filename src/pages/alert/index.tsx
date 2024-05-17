import React, { useState, useEffect } from 'react';
import BackRouteHeader from '@/app/_component/atom/BackRouterHeader';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import { LocalStorage } from '@/hooks/useUtil';
import { apiDevUrl } from '@/hooks/api';

const DateText = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #191f28;
  padding: 14px 20px 6px 20px;
  opacity: 1;
`;

const AlarmItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #191f28;
  padding: 14px 20px;
  opacity: 1;
`;

const TimeText = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  text-align: right;
  color: #b0b8c1;
  align-self: flex-end;
`;

const ContentText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #191f28;
`;

const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function formatDate(date) {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);
  const interval = seconds / 86400;

  if (interval > 1) {
    return `${Math.floor(interval)}일전`;
  }
  if (interval > 1 / 24) {
    return `${Math.floor(interval * 24)}시간전`;
  }
  if (interval * 24 * 60 > 1) {
    return `${Math.floor(interval * 24 * 60)}분전`;
  }
  return '방금 전';
}

export default function AlertPage() {
  const [alarms, setAlarms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const renderDate = () => {
    const today = new Date();
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;

    return today.getDate() === date.getDate() &&
      today.getMonth() === date.getMonth() &&
      today.getFullYear() === date.getFullYear()
      ? '오늘'
      : formattedDate;
  };

  const accessToken = LocalStorage.getItem('accessToken');
  useEffect(() => {
    fetch(`${apiDevUrl}/notifications/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAlarms(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BackRouteHeader title="알림" onBack={handleBackButtonClick} />
      <DateText>{renderDate()}</DateText>
      <AlarmList>
        {alarms.map((alarm, index) => (
          <AlarmItem key={index}>
            <Image
              src={Images.ico_alert_vaccine}
              alt="Alert Icon"
              width={20}
              height={20}
            />
            <ContentText>{alarm.content}</ContentText>
            <TimeText>{formatDate(alarm.createdAt)}</TimeText>
          </AlarmItem>
        ))}
      </AlarmList>
      <NavigationFixed />
    </div>
  );
}
