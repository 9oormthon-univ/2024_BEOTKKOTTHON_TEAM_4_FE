'use client';

import * as React from 'react';
import { LoginWrapper } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(): React.JSX.Element {
  const [userData, setUserData] = useState(null);
  // const router = useRouter();
  const handleKakaoLogin = () => {
    window.open('https://api-dev.vacgom.co.kr/api/v1/oauth/kakao');
  };

  return (
    <LoginWrapper>
      <div className="main">
        <div className="title">
          <Image src={Images.splash} alt={'백곰'} />
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
      <div className="bottom">
        <Button
          label={'카카오톡 계정으로 가입하기'}
          variant={'kakao'}
          size={'kakao'}
          prevIcon={Icons.kakao}
          iconSize={'20'}
          onClick={handleKakaoLogin}
        />
        <a className="privacy">개인정보처리방침</a>
      </div>
    </LoginWrapper>
  );
}
