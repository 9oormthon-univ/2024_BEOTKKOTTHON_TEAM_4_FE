'use client';
import * as React from 'react';
import { HomeWrap } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useEffect, useState } from 'react';

export default function Home(): React.JSX.Element {
  const handleKakaoLogin = () => {
    window.open('https://api-dev.vacgom.co.kr/api/v1/oauth/kakao');
  };
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.clear();
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeWrap className={'splash'}>
      <div className={`main ${showContent ? 'show-content' : ''}`}>
        <div className={`title ${showTitle ? 'show-title' : ''}`}>
          <Image src={Images.splash} alt={'백곰'} />
          <div className="sub_title">백신아, 곰아워!</div>
        </div>
      </div>
      <div className={`splash_image ${showContent ? 'show-content' : ''} `}>
        <Image
          className={'vacgom_icon'}
          src={Images.vacgom01}
          alt={'백곰 스플래시 이미지'}
        />
      </div>
      <div className={`bottom ${showContent ? 'show-content' : ''} `}>
        <Button
          label={'카카오로 계속하기'}
          variant={'kakao'}
          size={'kakao'}
          prevIcon={Icons.kakao}
          iconSize={'20'}
          onClick={handleKakaoLogin}
        />
        <a className="privacy">개인정보처리방침</a>
      </div>
    </HomeWrap>
  );
}
