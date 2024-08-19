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

  // 타입에 따른 친숙한 이름 반환
  const getTypeName = (type) => {
    switch (type) {
      case "PERDIATRICS":
        return "소아청소년과";
      case "CLINIC":
        return "병원, 의원";
      case "OBSTERICS_GYNECOLOGY":
        return "산부인과";
      case "UNIVERSITY_HOSPITAL":
        return "대형병원";
      default:
        return type;
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <Bar />
        <MainSection>
          <HospitalName>{content.name}</HospitalName>
          <Major>{getTypeName(content.type)}</Major>
        </MainSection>
        <Address>{content.address}</Address>
      </ModalContainer>
    </Overlay>
  );
};
