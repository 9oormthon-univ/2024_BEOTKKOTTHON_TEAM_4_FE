'use client';

import * as React from 'react';
import { ValidateCheckWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import { ButtonType } from '@/app/_component/atom/atomType';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
type props = {
  label: string;
  status: boolean;
};
const ValidateCheck: React.FC<props> = ({ label, status }) => {
  return (
    <ValidateCheckWrap>
      <Icon icon={status ? Icons.check : Icons.check} alt={'체크'} />
      <div className="content">{label}</div>
    </ValidateCheckWrap>
  );
};

export default ValidateCheck;
