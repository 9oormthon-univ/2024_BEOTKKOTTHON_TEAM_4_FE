'use client';

import * as React from 'react';
import { DonePageWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { router } from 'next/navigation';
import { MainHeaderType } from '@/app/_component/molecule/moleculeType';

type props = { title: string; content: string };
const DonePage: React.FC<MainHeaderType> = ({ title, content }) => {
  return (
    <DonePageWrap>
      <Image src={Images.vacgom_face} alt={'접종 이미지'} />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </DonePageWrap>
  );
};

export default DonePage;
