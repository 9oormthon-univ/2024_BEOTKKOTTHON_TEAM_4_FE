'use client';

import * as React from 'react';
import { LoadingPageWrap } from './style';
import Image from 'next/image';
import { Colors, Icons, Images } from '@globalStyles';
import { SecureLocalStorage } from '@/hooks/useUtil';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

type props = {};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const LoadingPage: React.FC<props> = ({}) => {
  const username = SecureLocalStorage.getItem('userName');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 5,
      );
    }, 390);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          <div className="progress">
            <BorderLinearProgress variant="determinate" value={progress} />
          </div>
        </div>
      </div>
    </LoadingPageWrap>
  );
};

export default LoadingPage;
