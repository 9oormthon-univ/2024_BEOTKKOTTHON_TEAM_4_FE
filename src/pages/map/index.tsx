import React, { useEffect } from 'react';
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
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };
      
      new naver.maps.Map('map', mapOptions);
    };

    // naver.maps 객체가 로드되면 지도를 초기화
    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => initMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <Main>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </Main>
  );
}
