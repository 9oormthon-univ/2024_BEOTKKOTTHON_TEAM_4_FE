import React from 'react';
import styled from '@emotion/styled';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f44336;
  color: white;
  padding: 16px;
  border-radius: 5px;
  z-index: 1000;
`;

const Toast = ({ message, isOpen }) => {
  if (!isOpen) return null;

  return (
    <ToastContainer>
      {message}
    </ToastContainer>
  );
};

export default Toast;
