import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { hospitals } from "@/utils/hpv-api";
import Tooltip from "@/app/_component/atom/Tooltip";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

// 화면 설계서 버전의 스타일입니다 (디자인 미적용)
const CurrentLocationButton = styled.button`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #ACACAC;
  color: #000000;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 5;
`;

export default function HospitalMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399), // 추후 해커톤 장소로 변경 예정
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);
      mapRef.current = map;

      // 사용자의 현재 위치 표시
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
          new naver.maps.Marker({
            position: currentLocation,
            map: map,
            title: "Your Location",
          });

          // 지도 첫 접속 시 사용자의 현 위치로 중심이 오도록 추가
          map.setCenter(currentLocation);
        });
      }

      hospitals.forEach(hospital => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name,
        });
      });

      setIsMapLoaded(true);
    };

    // naver.maps 객체가 로드되면 지도를 초기화하기
    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement("script");
      mapScript.onload = loadMap;
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = new naver.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        mapRef.current.setCenter(currentLocation);
      });
    }
  };

  return (
    <Main>
      <div id="map" style={{ width: "100%", height: "500px" }}>
        {!isMapLoaded && <p>지도를 준비 중입니다!</p>}
        <Tooltip />
        <CurrentLocationButton onClick={handleCurrentLocationClick}>
          현재 위치 재검색
        </CurrentLocationButton>
      </div>
    </Main>
  );
}
