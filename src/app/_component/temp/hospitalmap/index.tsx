import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { hospitals } from "@/utils/influ-api";
import Tooltip from "@/app/_component/atom/Tooltip";
import { Modal } from "../../atom/MapModal";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  margin-top: -110px;
`;

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
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);
      mapRef.current = map;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
          new naver.maps.Marker({
            position: currentLocation,
            map: map,
            title: "Your Location",
          });

          map.setCenter(currentLocation);
        });
      }

      hospitals.forEach(hospital => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name,
          // icon: {
          //   url: '/path/to/your/image.png', // 이미지 URL
          //   size: new naver.maps.Size(24, 37), // 이미지 크기
          //   scaledSize: new naver.maps.Size(24, 37), // 스케일링된 이미지 크기
          //   origin: new naver.maps.Point(0, 0), // 이미지에서 아이콘의 시작점
          //   anchor: new naver.maps.Point(12, 37) // 마커의 위치에 해당하는 이미지 내의 점
          // }
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          setModalContent(`${hospital.name}<br/>주소: ${hospital.address}<br/>전공: ${hospital.major}`);
          setIsModalOpen(true);
        });
      });

      setIsMapLoaded(true);
    };

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
        const currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        mapRef.current.setCenter(currentLocation);
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Main>
      <div id="map" style={{ width: "160%", height: "500px" }}>
        {!isMapLoaded && <p>지도를 준비 중입니다!</p>}
        <Tooltip />
        <CurrentLocationButton onClick={handleCurrentLocationClick}>
          현재 위치 재검색
        </CurrentLocationButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
    </Main>
  );
}
