import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';
import { apiDevUrl } from '@/hooks/api';
import { LocalStorage } from '@/hooks/useUtil';
import {
  MainContainer,
  UserGreeting,
  VaccineCard,
  CardContent,
  TextSection,
  VaccinationStatus,
  InfectionName,
  MapButton
} from './styles';

export default function MainMap() {
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [hpvRatio, setHpvRatio] = useState(0);
  const [influenzaRatio, setInfluenzaRatio] = useState(0);
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

    fetch(`${apiDevUrl}/search/ratio`, {
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
      setHpvRatio(data.hpvRatio);
      setInfluenzaRatio(data.influenzaRatio);
      setIsLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
  }, [apiDevUrl, accessToken]);

  if (isLoading) return;
  if (error) return <div>Error: {error}</div>;

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
              20대 이용자 중 {hpvRatio}%가 접종했어요
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
              20대 이용자 중 {influenzaRatio}%가 접종했어요
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
