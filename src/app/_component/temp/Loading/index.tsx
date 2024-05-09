'use client';

import * as React from 'react';
import { LoadingPageWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import Button from '../../atom/button/button';
import { SecureLocalStorage } from '@/hooks/useUtil';

type props = {};
const LoadingPage: React.FC<props> = ({}) => {
  const username = SecureLocalStorage.getItem('userName');
  return (
    <LoadingPageWrap>
      <div className="container">
        <div className="top">
          <div className="title">
            {username ? username : '회원'}님의 <br />
            접종 내역을 조회중이에요
          </div>
          <div className="subTitle">
            예방접종등록사업을 시작한, <br />
            2002년 이후의 예방접종기록을 확인할 수 있어요
          </div>
        </div>
        <div className="body">
          <Image src={Images.vacgomLoading} alt={'백곰'} />
        </div>
        <div className="bottom">
          <div className="progress"></div>
        </div>
      </div>
    </LoadingPageWrap>
  );
};

export default LoadingPage;
