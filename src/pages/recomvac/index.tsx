import React, { useState, useEffect } from 'react';
import MainHeader from '@/app/_component/atom/RouteHeader';
import NavigationFixed from '@/app/_component/organism/navigationFixed';
import HomeDiseaseCard from '@/app/_component/atom/HomeDiseaseCard';
import styled from '@emotion/styled';
import { apiDevUrl } from '@/hooks/api';
import NoneHome from '@/app/_component/atom/NoneHome';
import { LocalStorage } from '@/hooks/useUtil';

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
  margin-bottom:100px;
`;

export default function recomVac() {

 const [userName, setUserName] = useState('');
 const [recommendVaccine, setRecommendVaccine] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState("");

 const accessToken = LocalStorage.getItem('accessToken');
 
 useEffect(() => {
   fetch(`${apiDevUrl}/me`, {
     method: 'GET',
     headers: {
       'Authorization': `Bearer ${accessToken}`,
       'Content-Type': 'application/json'
     }
   })
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(data => {
     setUserName(data.name);
   })
   .catch(error => {
     setError(error.message);
   });

   fetch(`${apiDevUrl}/search/recommend`, {
     method: 'GET',
     headers: {
       'Authorization': `Bearer ${accessToken}`,
       'Content-Type': 'application/json'
     }
   })
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(data => {
     setRecommendVaccine(data);
     setIsLoading(false);
   })
   .catch(error => {
     setError(error.message);
     setIsLoading(false);
   });
 }, []);

 if (isLoading) return;
 if (error) return <div>Error: {error}</div>;
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
      {recommendVaccine.length > 0 ? (
          recommendVaccine.map(vaccine => (
            <HomeDiseaseCard key={vaccine.id} diseaseName={vaccine.name} imageUrl={vaccine.iconImage} />
          ))
        ) : (
          <NoneHome title="앗! 추천 백신이 없어요" />
        )}
      </CardsContainer>
      <NavigationFixed/>
    </div>
  );
}