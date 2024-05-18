'use client';
import * as React from 'react';
import { HomeWrap } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useEffect, useState } from 'react';
import { PATH } from '@/routes/path';
import { useRouter } from 'next/navigation';
import { AccessTokenRouter, LocalStorage } from '@/hooks/useUtil';
import jwt from 'jsonwebtoken';

export default function Home(): React.JSX.Element {
  const handleKakaoLogin = () => {
    window.open(PATH.KAKAOLOGIN);
  };
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const router = useRouter();
  const { goToHome } = AccessTokenRouter(router);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    goToHome();
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
        <a className="privacy" href={PATH.NOTION_TERMS}>
          개인정보처리방침
        </a>
      </div>
    </HomeWrap>
  );
}
