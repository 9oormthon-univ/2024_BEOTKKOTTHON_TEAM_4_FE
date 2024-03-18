'use client';

import * as React from 'react';
import { SpinerWrapper } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Spiner(): React.JSX.Element {
  const router = useRouter();
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-dev.vacgom.co.kr/api/v1/oauth/kakao/login?code=${code}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log(data);
        // router.push('https://api-dev.vacgom.co.kr/api/v1/oauth/kakao');
      } catch (error) {
        console.error('error', error);
      }
    };

    if (code) {
      fetchData(); // 코드가 존재할 때만 fetchData 함수 호출
    }
  }, [code]);

  return <SpinerWrapper>스피너</SpinerWrapper>;
}
