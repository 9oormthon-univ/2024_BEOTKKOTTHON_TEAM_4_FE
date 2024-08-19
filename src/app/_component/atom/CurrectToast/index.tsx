import React from 'react';
import styled from '@emotion/styled';

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
  margin-bottom:60px;
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

const CurrectToast = ({ isVisible }) => {
  return (
    <ToastContainer style={{ opacity: isVisible ? 1 : 0 }}>
      <ToastImage src="/assets/ico/ico-checkbox-selected-enabled.svg" alt="Checked Icon" />
      <ToastMessage>현재 위치는 제주특별자치도 서귀포시 입니다</ToastMessage>
    </ToastContainer>
  );
};

export default CurrectToast;
