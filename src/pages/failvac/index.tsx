import React from 'react';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import HomeDiseaseCard from '@/app/_component/atom/HomeDiseaseCard';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Greeting = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  color: #333D4B;
`;

const Recommendation = styled(Greeting)`
  color: #4196FD;
  margin-left: 10px;
`;

const Description = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #8B95A1;
  text-align: left;
  margin: 0 20px 20px 20px;
  white-space: pre-wrap;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 20px 20px 20px;
  gap: 14px;

  & > div {
    width: calc(50% - 7px);
  }
`;

export default function recomVac() {

  const userName = "오소현";

  const failedVaccine = [
    { id: 6, iconsImage: Images.ico_vac6, vacName: '폐렴구균 감염증' },
    { id: 7, iconsImage: Images.ico_vac7, vacName: '홍역' },
    { id: 8, iconsImage: Images.ico_vac8, vacName: '수두' },
    { id: 9, iconsImage: Images.ico_vac9, vacName: '일본뇌염' },
    { id: 10, iconsImage: Images.ico_vac10, vacName: '인플루엔자' },
  ];

  return (
    <div>
      <MainHeader title="누락된 백신" url="/home" />
      <GreetingContainer>
        <FlexContainer>
          <Greeting>{userName}님을 위한</Greeting>
          <Recommendation>누락된 백신</Recommendation>
        </FlexContainer>
      </GreetingContainer>
      <Description>
        접종시기 및 접종횟수 등 세부사항은{'\n'}접종기관의 의사와 상담해야해요!
      </Description>
      <CardsContainer>
        {failedVaccine.map((disease) => (
          <HomeDiseaseCard
            key={disease.id}
            diseaseName={disease.vacName}
            imageUrl={disease.iconsImage}
          />
        ))}
      </CardsContainer>
      <NavigationFixed/>
    </div>
  );
}