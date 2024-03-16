import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

// 병원 정보 배열
const hospitals = [
  { name: '다보스종합병원', lat: 37.233036, lng: 127.210669 },
  { name: '고려가정의원', lat: 37.314665, lng: 127.088684 },
  { name: '고려메디웰의원', lat: 37.319962, lng: 127.062170 },
  { name: '광교미소모아내과의원', lat: 37.296958, lng: 127.068652 },
  { name: '광교바른내과의원', lat: 37.296563, lng: 127.069479 },
  { name: '광교연세소아청소년과의원', lat: 37.296790, lng: 127.068056 },
  { name: '김병연소아청소년과의원', lat: 37.298382, lng: 127.069968 },
  { name: '김종화푸른소아과의원', lat: 37.324467, lng: 127.094711 },
  { name: '김진영내과의원', lat: 37.323318, lng: 127.077351 },
  { name: '꾸러기소아청소년과의원', lat: 37.308922, lng: 127.085384 },
  { name: '노블산부인과의원', lat: 37.306693, lng: 127.084855 },
  { name: '동천연세소아청소년과의원', lat: 37.335601, lng: 127.093379 },
  { name: '동천이안소아청소년과의원', lat: 37.336398, lng: 127.091651 },
  { name: '메디코아내과의원', lat: 37.323913, lng: 127.095301 },
  { name: '명가정의학과의원', lat: 37.335341, lng: 127.108661 },
  { name: '박수언소아청소년과의원', lat: 37.331978, lng: 127.122816 },
  { name: '박지영산부인과의원', lat: 37.322536, lng: 127.095538 },
  { name: '봄소아청소년과의원', lat: 37.323121, lng: 127.078023 },
  { name: '삼성굿모닝의원', lat: 37.335983, lng: 127.093245 }
];


export default function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399), // 기본 위치
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);

      // 병원 정보를 순회하면서 마커 추가
      hospitals.forEach(hospital => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name, // 마커에 마우스를 올렸을 때 표시될 텍스트
        });
      });

      setIsMapLoaded(true);
    };

    // naver.maps 객체가 로드되면 지도를 초기화
    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <Main>
      <div id="map" style={{ width: '100%', height: '500px' }}>
        {!isMapLoaded && <p>Loading map...</p>}
      </div>
    </Main>
  );
}
