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

  const recommendVaccine = [
    { id: 1, iconsImage: Images.ico_vac1, vacName: '결핵' },
    { id: 2, iconsImage: Images.ico_vac2, vacName: 'B형간염' },
    { id: 3, iconsImage: Images.ico_vac3, vacName: '디프테리아' },
    { id: 4, iconsImage: Images.ico_vac4, vacName: '폴리오' },
    { id: 5, iconsImage: Images.ico_vac5, vacName: 'b형헤모필루스인플루엔자' },
  ];

  return (
    <div>
      <MainHeader title="추천 백신" url="/home" />
      <GreetingContainer>
        <FlexContainer>
          <Greeting>{userName}님을 위한</Greeting>
          <Recommendation>추천 백신</Recommendation>
        </FlexContainer>
      </GreetingContainer>
      <Description>
        접종시기 및 접종횟수 등 세부사항은{'\n'}접종기관의 의사와 상담해야해요!
      </Description>
      <CardsContainer>
        {recommendVaccine.map((disease) => (
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