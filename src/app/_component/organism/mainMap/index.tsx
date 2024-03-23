import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  margin-bottom: 80px;
`;

const UserGreeting = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #191F28;
  margin-top:20px;
  margin-bottom: 20px;
  margin-left: -80px;
`;

const VaccineCard = styled.div`
  width: 353px;
  height: auto;
  padding: 20px;
  border-radius: 20px;
  background: #F9FAFB;
  border: 1px solid #F2F4F6;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const VaccinationStatus = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #6B7684;
  margin-bottom: 10px;
`;

const InfectionName = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  color: #333D4B;
`;

const MapButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
`;

export default function MainMap() {
  const router = useRouter();
  const userName = "오소현";
  const vaccinationRate = 65;
  
  const handleMapButtonClick = (url) => {
    router.push(url);
  };

  return (
    <MainContainer>
      <UserGreeting>
        {userName}님!<br/>
        지원받을 수 있는 백신을 확인해보세요!
      </UserGreeting>
      <VaccineCard>
        <CardContent>
          <TextSection>
            <VaccinationStatus>
              20대 이용자 중 {vaccinationRate}%가 접종했어요
            </VaccinationStatus>
            <InfectionName>
              사람유두종 바이러스
            </InfectionName>
          </TextSection>
          <Image src={Images.ico_vac15} alt="사람유두종 바이러스 이미지" width={100} height={100} />
        </CardContent>
        <MapButton onClick={() => handleMapButtonClick('/hpvmap')}>
          <Image src={Images.ico_map_main} alt="병원 지도 페이지로 이동"/>
        </MapButton>
      </VaccineCard>

      <VaccineCard>
      <CardContent>
          <TextSection>
            <VaccinationStatus>
              20대 이용자 중 {vaccinationRate}%가 접종했어요
            </VaccinationStatus>
            <InfectionName>
              인플루엔자
            </InfectionName>
          </TextSection>
          <Image src={Images.ico_vac10} alt="인플루엔자 이미지" width={100} height={100} />
        </CardContent>
        <MapButton onClick={() => handleMapButtonClick('/influmap')}>
          <Image src={Images.ico_map_main} alt="병원 지도 페이지로 이동" />
        </MapButton>
      </VaccineCard>
    </MainContainer>
  );
}
