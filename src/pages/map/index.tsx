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

export default function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);

      // 주어진 위도와 경도를 사용하여 마커 추가
      const hospitalLocation = new naver.maps.LatLng(37.231514, 127.211419);
      new naver.maps.Marker({
        position: hospitalLocation,
        map: map,
        title: '다보스종합병원',
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
