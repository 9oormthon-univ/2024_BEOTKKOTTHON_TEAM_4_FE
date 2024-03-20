import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { hospitals } from '@/utils/influ-api';
import Tooltip from '@/app/_component/atom/Tooltip';
import { Modal } from '../../atom/MapModal';
import ReloadButton from '@/app/_component/atom/ReloadButton';
import { Images } from '@globalStyles';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  margin-top: -110px;
`;

export default function HospitalMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospitalId, setSelectedHospitalId] = useState(null);
  const mapRef = useRef(null);

   // 현재 위치를 재검색하는 함수
   const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentLocation = new naver.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude,
        );
        mapRef.current.setCenter(currentLocation);
      });
    }
  };

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
            title: 'Your Location',
            icon: {
              url: Images.ico_map_my,
              size: new naver.maps.Size(24, 37),
              scaledSize: new naver.maps.Size(24, 37),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(12, 37)
            }
          });

          map.setCenter(currentLocation);
        });
      }

      hospitals.forEach((hospital) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name,
          icon: {
            url: selectedHospitalId === hospital.id ? Images.ico_map_selec : Images.ico_map_unselec,
            size: new naver.maps.Size(24, 37),
            scaledSize: new naver.maps.Size(24, 37),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 37)
          }
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          setSelectedHospitalId(selectedHospitalId === hospital.id ? null : hospital.id);
          setModalContent(`${hospital.name}<br/>주소: ${hospital.address}<br/>전공: ${hospital.major}`);
          setIsModalOpen(true);
        });
      });

      setIsMapLoaded(true);
    };

    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = loadMap;
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
      document.head.appendChild(mapScript);
    }
  }, [selectedHospitalId]); // selectedHospitalId를 의존성 배열에 추가

  return (
    <Main>
      <div id="map" style={{ width: '160%', height: '500px' }}>
        {!isMapLoaded && <p>지도를 준비 중입니다!</p>}
        <Tooltip />
        <ReloadButton onClick={handleCurrentLocationClick} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
    </Main>
  );
}