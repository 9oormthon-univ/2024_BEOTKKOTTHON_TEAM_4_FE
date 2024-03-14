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
    const initMap = (latitude, longitude) => {
      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);

      // 사용자의 현재 위치에 마커를 생성하고 지도에 추가
      new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: map,
        title: 'Your Location',
      });

      setIsMapLoaded(true); // 지도가 로드되면 상태를 업데이트
    };

    const loadMap = () => {
      // 사용자의 현재 위치를 가져오거나 기본 위치를 사용
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            initMap(position.coords.latitude, position.coords.longitude);
          },
          () => {
            window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
            initMap(37.3595704, 127.105399); // 기본 위치로 지정
          }
        );
      } else {
        window.alert('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
        initMap(37.3595704, 127.105399); // 기본 위치로 지정
      }
    };

    // naver.maps 객체가 로드되면 지도를 초기화
    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`;
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
