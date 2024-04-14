import React from 'react';
import { ToastContainer } from './styles'

const Toast = ({ message, isOpen }) => {
  if (!isOpen) return null;

  return (
    <ToastContainer>
      {message}
    </ToastContainer>
  );
};

export default Toast;
