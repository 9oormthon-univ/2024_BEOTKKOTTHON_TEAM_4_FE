'use client';

import * as React from 'react';
import { SplashWrapper } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';

import InputForm from '@/app/_component/atom/InputForm';
import CheckBox from '@/app/_component/atom/CheckBox';
import RadioBox from '../_component/atom/RadioBox';

export default function Home() {
  return (
    <SplashWrapper>
      <div className="main">
        <div className="title">
          <Image src={Images.vacgom} alt={'백곰'} />
          <div className="sub_title">백신아, 곰아워!</div>
        </div>
      </div>
      <div className="splash_image">
        <Image
          className={'vacgom_icon'}
          src={Images.vacgom01}
          alt={'백곰 스플래시 이미지'}
        />
      </div>
    </SplashWrapper>
  );
}
