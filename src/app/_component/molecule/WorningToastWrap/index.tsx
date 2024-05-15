'use client';
import React, { useEffect, useState } from 'react';
import { WarningToastWrapContainer } from './style';
import WarningToast from '@/app/_component/atom/WarningToast';
type props = {
  errorMessage: string;
  setErrorMessage?: (value: string) => void;
};
const WarningToastWrap: React.FC<props> = (props) => {
  const { errorMessage, setErrorMessage } = props;
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
    const timer = setTimeout(() => {
      setShowError(false);
      if (setErrorMessage) {
        setErrorMessage('');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <WarningToastWrapContainer>
      {errorMessage && showError && <WarningToast message={errorMessage} />}
    </WarningToastWrapContainer>
  );
};

export default WarningToastWrap;
