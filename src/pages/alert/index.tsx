import React from 'react';
import BackRouteHeader from '@/app/_component/atom/BackRouterHeader';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';

const DateText = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #191F28;
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
  color: #191F28;
  padding: 14px 20px;
  opacity: 1;
`;

const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const alarms = [
  { name: "오소현", count: 3, type: "접종인증서" },
  { name: "백곰", type: "가입" },
  { disease: "코로나", type: "누락" },
  { name: "오소현", count: 4, type: "백신" }
];

export default function AlertPage() {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  const renderDate = () => {
    const today = new Date();
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;
  
    return (today.getDate() === date.getDate() &&
            today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear()) ? "오늘" : formattedDate;
  };
  

  const renderAlarmIcon = (type) => {
    switch (type) {
      case "접종인증서":
        return Images.ico_alert_clock;
      case "가입":
        return Images.ico_alert_welcome;
      case "누락":
        return Images.ico_alert_fail;
      case "백신":
        return Images.ico_alert_vaccine;
      default:
        return Images.ico_alert_clock;
    }
  };

  const renderAlarmText = (alarm) => {
    switch (alarm.type) {
      case "접종인증서":
        return `${alarm.name}님의 접종인증서가 ${alarm.count}개 발급됐어요.`;
      case "가입":
        return `${alarm.name}님! 백곰 가입을 환영해요:)`;
      case "누락":
        return `${alarm.disease} 백신 접종이 누락됐어요!`;
      case "백신":
        return `${alarm.name}님을 위한 백신이 총 ${alarm.count}개 있어요!`;
      default:
        return "알림이 없습니다.";
    }
  };

  return (
    <div>
      <BackRouteHeader title="알람" onBack={handleBackButtonClick} />
      <DateText>{renderDate()}</DateText>
      <AlarmList>
        {alarms.map((alarm, index) => (
          <AlarmItem key={index}>
            <Image src={renderAlarmIcon(alarm.type)} alt="Alert Icon" width={20} height={20} />
            <div>{renderAlarmText(alarm)}</div>
          </AlarmItem>
        ))}
      </AlarmList>
    </div>
  );
}
