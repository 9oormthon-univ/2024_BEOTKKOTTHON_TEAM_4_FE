'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/VaccineCertificate/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';
import { MenuTitleContainer } from '@/app/_component/atom/MenuTitle/styles';
import MenuTitle from '@/app/_component/atom/MenuTitle';
import VaccineItem from '@/app/_component/atom/VaccineItem';
import NavigationFixed from '@/app/_component/organism/navigationFixed';

import HomeDiseaseCard from '@/app/_component/atom/HomeDiseaseCard';
import styled from '@emotion/styled';
import Image from 'next/image';
import NoneHome from '@/app/_component/atom/NoneHome';
import { apiDevUrl } from '@/hooks/api';

const GreetingContainer = styled.div`
  text-align: left;
  margin: 20px;
`;

const UserName = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  color: #333d4b;
`;

const GreetingMessage = styled.span`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: #333d4b;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default function Home() {
 // `userName` 상태는 한 번만 선언합니다.
 const [userName, setUserName] = useState('');
 const [recommendVaccine, setRecommendVaccine] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState("");

 const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDkxOGUwOC05YzcxLTQxNWUtOWIxMC00ZmQyNWYxMDRkNzEiLCJpYXQiOjE3MTExNzI1OTUsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MjAxNzI1OTV9.V3FsYMvYqqKAV76ryZkX_2TEO9WSlR43koBWgrBcA78';
 
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

 if (isLoading) return <div>Loading...</div>;
 if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Container>
        <MainHeader title="홈" />
        <GreetingContainer>
          <UserName>{userName}님, </UserName>
          <GreetingMessage>반가워요!</GreetingMessage>
        </GreetingContainer>
        <ImageContainer>
          <Image src={Images.ico_home_greet} alt="추천하는 이미지" />
        </ImageContainer>
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle title={`${userName}님을 위한 추천 백신`} rightIconUrl={'/recomvac'} />
          </div>
        <div className="content_body">
        {recommendVaccine.length > 0 ? (
          recommendVaccine.map(vaccine => (
            <HomeDiseaseCard key={vaccine.id} diseaseName={vaccine.vaccineName} imageUrl={vaccine.iconImage} />
          ))
        ) : (
          <NoneHome title="앗! 추천 백신이 없어요" />
        )}
      </div>
      </div>
        <div className="body_wrap">
          <div className="content_head">
            <MenuTitle title="접종 인증서" rightIconUrl={'/vachistory/certificate/list'} />
          </div>
          <div className="content_body">
          {/* 접종 인증서 있을 때 */}
          {/* <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} />
            <VaccineCard variant={'small'} image={Images.vacgom01} /> */}
            <NoneHome title="앗! 접종 인증서가 없어요" />
          </div>
        </div>
        <NavigationFixed />
      </Container>
    </>
  );
}
