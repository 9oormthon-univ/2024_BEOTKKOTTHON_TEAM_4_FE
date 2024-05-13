'use client';

import * as React from 'react';
import { BottomButtonWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import { ButtonType } from '@/app/_component/atom/atomType';
type props = {
  loading: boolean;
  filled: boolean;
  handleNextButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};
const BottomButton: React.FC<props> = ({
  loading,
  filled,
  handleNextButtonClick,
}) => {
  return (
    <BottomButtonWrap
      className={filled ? 'confirm_button_Filled' : 'confirm_button'}
      onClick={handleNextButtonClick}
    >
      다음
    </BottomButtonWrap>
  );
};

export default BottomButton;
