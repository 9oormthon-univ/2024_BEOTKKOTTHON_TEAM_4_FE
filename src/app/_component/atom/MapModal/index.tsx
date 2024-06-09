import React from 'react';
import { Overlay, ModalContainer, Bar, MainSection, HospitalName, Major, SubSection, HospitalNow, HospitalHow, Address } from './styles';

export const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const getCurrentTime = () => new Date().getHours() + ':' + new Date().getMinutes().toString().padStart(2, '0');
  const isOpenNow = (closeTime) => {
    const currentTime = getCurrentTime();
    return currentTime < closeTime;
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <Bar />
        <MainSection>
          <HospitalName>{content.name}</HospitalName>
          <Major>{content.major}</Major>
        </MainSection>
        <SubSection>
          <HospitalNow>{isOpenNow(content.closeTime) ? '진료 중' : '진료 종료'}</HospitalNow>
          <HospitalHow>{`진료 마감`}</HospitalHow>
        </SubSection>
        <Address>{content.address}</Address>
      </ModalContainer>
    </Overlay>
   );
  };