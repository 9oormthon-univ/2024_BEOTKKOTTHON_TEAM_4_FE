'use client';
import React from 'react';
import { WarningToastWrapContainer } from './style';
import WarningToast from '@/app/_component/atom/WarningToast';
type props = { errorMessage: string };
const WarningToastWrap: React.FC<props> = (props) => {
  const { errorMessage } = props;

  return (
    <WarningToastWrapContainer>
      {errorMessage && <WarningToast message={errorMessage} />}
    </WarningToastWrapContainer>
  );
};

export default WarningToastWrap;
