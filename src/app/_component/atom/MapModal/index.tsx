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

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={handleModalClick}>
        <Bar />
        <MainSection>
          <HospitalName>{content.name}</HospitalName>
          <Major>{content.major}</Major>
        </MainSection>
        <SubSection>
          <HospitalNow>진료 여부</HospitalNow>
          <HospitalHow>연결 아직 안함</HospitalHow>
        </SubSection>
        <Address>{content.address}</Address>
      </ModalContainer>
    </Overlay>
  );
};