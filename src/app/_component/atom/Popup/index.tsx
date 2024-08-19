import React from 'react';
import styled from '@emotion/styled';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  text-align: center;
`;

const ModalHeader = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

function Popup({ onClose }) {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>공지 사항</ModalHeader>
        <ModalContent>
          현재 서비스는 자체 개발한 스크래핑 모듈을 통해 수집된 실제 사용자 데이터를 바탕으로 생성된 프로토타입입니다.
          현재 백곰은 MVP(최소 기능 제품) 형태로 제공되고 있으며, 향후 앱 서비스로의 제공을 목표로 지속적으로 개선하고 있습니다.
        </ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
}

export default Popup;
