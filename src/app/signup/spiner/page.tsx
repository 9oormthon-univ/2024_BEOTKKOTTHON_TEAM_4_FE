'use client';

import * as React from 'react';
import { SpinerWrapper } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@/styles';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Spiner(): React.JSX.Element {
  const router = useRouter();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const queryCode = new URL(window.location.href).searchParams.get('code');
    console.log(queryCode);
    if (queryCode) {
      setCode(queryCode);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-dev.vacgom.co.kr/api/v1/oauth/kakao/login?code=${code}`,
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          localStorage.setItem('accessToken', data.token.accessToken);
          setTimeout(() => {
            router.push('/signup');
          }, 1000);
        } else {
          console.error('Failed to fetch data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (code) {
      fetchData();
    }
  }, [code]);

  return <SpinerWrapper>스피너</SpinerWrapper>;
}
