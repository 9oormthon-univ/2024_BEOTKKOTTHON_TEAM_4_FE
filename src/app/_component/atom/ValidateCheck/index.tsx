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
  status: string;
};
const ValidateCheck: React.FC<props> = ({ label, status = 'default' }) => {
  return (
    <ValidateCheckWrap status={status}>
      <Icon
        icon={
          status === 'default'
            ? Icons.check_default
            : status === 'true'
              ? Icons.check_true
              : Icons.check_false
        }
        alt={'체크'}
      />
      <div className="content">{label}</div>
    </ValidateCheckWrap>
  );
};

export default ValidateCheck;
