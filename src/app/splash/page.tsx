import * as React from 'react';
import { SplashWrapper } from './style';
import Image from 'next/image';
import { Colors, Icons, Images } from '@globalStyles';

export default function Splash() {
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
