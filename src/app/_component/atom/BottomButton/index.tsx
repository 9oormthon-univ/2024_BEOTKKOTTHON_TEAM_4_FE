'use client';

import * as React from 'react';
import { BottomButtonWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import { ButtonType } from '@/app/_component/atom/atomType';
type props = {
  filled: boolean;
  handleNextButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};
const BottomButton: React.FC<props> = ({ filled, handleNextButtonClick }) => {
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
