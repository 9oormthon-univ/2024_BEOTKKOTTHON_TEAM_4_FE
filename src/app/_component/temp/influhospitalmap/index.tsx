import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { hospitals } from '@/utils/influ-api';
import Tooltip from '@/app/_component/atom/Tooltip';
import { Images } from '@globalStyles';
import { Modal } from '../../atom/MapModal';
import ReloadButton from '@/app/_component/atom/ReloadButton';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - var(--header-height) - var(--navigation-height));
  padding: 0;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 66px;
  padding: 15px 20px;
  background-color: #E5F0FF;
  border-radius: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 10;
  margin-bottom:60px
`;

const ToastImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-align: left;
`;

const ToastMessage = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #4196FD;
  text-align: left;
`;

const LocationToast = ({ isVisible }) => {
  return (
    <ToastContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <ToastImage src="/assets/ico/ico-checkbox-selected-enabled.svg" alt="Checked Icon" />
      <ToastMessage>현재 위치는 성남시 분당구 입니다</ToastMessage>
    </ToastContainer>
  );
};

export default function HospitalMap() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospitalId, setSelectedHospitalId] = useState(null);
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);
  const [rememberedMarkerPosition, setRememberedMarkerPosition] = useState(null);
  const mapRef = useRef(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const headerHeight = '54px';
  const navigationHeight = '68px';

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

  useEffect(() => {
    const loadMap = () => {
      const hackathonLocation = new naver.maps.LatLng(37.351586, 127.07188);

      const mapOptions = {
        center: hackathonLocation,
        zoom: 12.5,
      };

      const map = new naver.maps.Map('map', mapOptions);
      mapRef.current = map;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentLocation = new naver.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          new naver.maps.Marker({
            position: currentLocation,
            map: map,
            title: 'Your Location',
            icon: {
              url: '/assets/ico/ico-map-my.svg',
              size: new naver.maps.Size(50, 63),
              scaledSize: new naver.maps.Size(50, 63),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(12, 37),
            },
          });
        });
      }

      hospitals.forEach((hospital) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name,
          icon: {
            url:
              selectedHospitalId === hospital.id
                ? '/assets/ico/ico-map-selec.svg'
                : '/assets/ico/ico-map-unselec.svg',
            size: new naver.maps.Size(50, 63),
            scaledSize: new naver.maps.Size(50, 63),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 37),
          },
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          setSelectedHospitalId(
            selectedHospitalId === hospital.id ? null : hospital.id
          );
          //setSelectedMarkerPosition(marker.getPosition());
          setModalContent({
            name: hospital.name,
            major: hospital.major,
            address: hospital.address,
          });
          setRememberedMarkerPosition(marker.getPosition());
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
  }, [selectedHospitalId]);

  useEffect(() => {
    if (!isModalOpen) {
      console.log("Selected marker position when modal is closed but remembered:", rememberedMarkerPosition);
      setSelectedMarkerPosition(rememberedMarkerPosition);
      if (rememberedMarkerPosition) {
        mapRef.current.setCenter(rememberedMarkerPosition);
      }
      setSelectedHospitalId(null);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (selectedMarkerPosition && isModalOpen) {
      console.log("Selected marker position when modal is open:", selectedMarkerPosition);
      mapRef.current.setCenter(selectedMarkerPosition);
    }
  }, [selectedMarkerPosition, isModalOpen]);

  useEffect(() => {
    if (selectedMarkerPosition && !isModalOpen) {
      console.log("Selected marker position when modal is closed but remembered:", selectedMarkerPosition);
      mapRef.current.setCenter(selectedMarkerPosition);
    }
  }, [selectedMarkerPosition, isModalOpen]);

  return (
    <>
    <Main
      style={{
        '--header-height': headerHeight,
        '--navigation-height': navigationHeight,
      }}
    >
      <MapContainer id="map">
        {!isMapLoaded && <p>지도를 준비 중입니다!</p>}
        <Tooltip
          tooltipImage={{
            button: Images.ico_map_tooltip_button,
            content: Images.ico_map_influ_tooltip,
          }}
        />
        <ReloadButton onClick={handleCurrentLocationClick} />
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={modalContent}
        />
      </MapContainer>
    </Main>
    <LocationToast isVisible={showToast} />
    </>
  );
}
