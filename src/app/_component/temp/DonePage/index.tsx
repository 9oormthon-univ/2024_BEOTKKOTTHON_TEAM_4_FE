'use client';

import * as React from 'react';
import { DonePageWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import Button from '../../atom/button/button';

type props = { title: string; content_top: string; content_bottom: string };
const DonePage: React.FC<props> = ({ title, content_top, content_bottom }) => {
  return (
    <DonePageWrap>
      <div className="container">
        <Image src={Images.vacgom_face} alt={'접종 이미지'} />
        <div className="title">{title}</div>
        <div className="content">{content_top}</div>
        <div className="content">{content_bottom}</div>
      </div>
    </DonePageWrap>
  );
};

export default DonePage;
