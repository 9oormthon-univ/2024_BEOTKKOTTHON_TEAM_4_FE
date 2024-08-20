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
  // const handleKakaoLogin = () => {
  //   window.open(PATH.KAKAOLOGIN);
  // };
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

  // 5초 후에 홈으로 라우팅
  useEffect(() => {
    LocalStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MDA4ODBmNS03OGEzLTQ5YTMtYmI3OC0xNWZjZjM5YTAzNjYiLCJpYXQiOjE3MjQwNjI2MjIsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE5MzMwNjI2MjJ9.5RBZAuZhRcsnMCtSY0VEVDR8x_03W6zvI7eggh_5I2s',
    );

    const redirectTimer = setTimeout(() => {
      router.push(PATH.HOME);
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <HomeWrap className={'splash'}>
      <div className={`main ${showContent ? 'show-content' : ''}`}>
        <div className={`title ${showTitle ? 'show-title' : ''}`}>
          <Image src={Images.splash} alt={'백곰'} />
          <div className="sub_title">백신아, 곰아워!</div>
          <div className={'powered'}>
            Vacgom is powered by{' '}
            <Image src={Images.kakaoCloud} className="kakaoCloud" />
          </div>
        </div>
      </div>
      <div className={`splash_image ${showContent ? 'show-content' : ''} `}>
        <Image
          className={'vacgom_icon'}
          src={Images.vacgom01}
          alt={'백곰 스플래시 이미지'}
        />
      </div>
      {/*<div className={`bottom ${showContent ? 'show-content' : ''} `}>*/}
      {/*  <Button*/}
      {/*    label={'카카오로 계속하기'}*/}
      {/*    variant={'kakao'}*/}
      {/*    size={'kakao'}*/}
      {/*    prevIcon={Icons.kakao}*/}
      {/*    iconSize={'20'}*/}
      {/*    onClick={handleKakaoLogin}*/}
      {/*  />*/}
      {/*  <a className="privacy" href={PATH.NOTION_TERMS}>*/}
      {/*    이용약관*/}
      {/*  </a>*/}
      {/*</div>*/}
    </HomeWrap>
  );
}
