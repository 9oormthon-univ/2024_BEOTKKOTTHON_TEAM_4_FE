import React from 'react';
import { ToastContainer, ToastMessage } from './styles';
import { Images } from '@globalStyles';
import Image from 'next/image';

interface WarningToastProps {
  message: string;
}

const ccc: React.FC<WarningToastProps> = ({ message }) => {
  return (
    <ToastContainer>
      <Image src={Images.warning} alt="Warning" width={20} height={20} />
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default WarningToast;
