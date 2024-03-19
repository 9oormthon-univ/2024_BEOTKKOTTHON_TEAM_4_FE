'use client';
import { ReactNode, useEffect, useState } from 'react';
import BackHeader from '@/app/_component/molecule/BackHeader';
import * as React from 'react';
import { useRouter } from 'next/router';

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    // 페이지 경로 가져오기
    const pathName = window.location.pathname;

    // URL 경로에 따라 title과 url 설정
    if (pathName.includes('/signup')) {
      setTitle('회원가입');
      setUrl('/vachistory');
    } else if (pathName.includes('/verification')) {
      setTitle('본인인증');
      setUrl('/signup');
    }
  }, []); // 처음 한 번만 실행

  return (
    <div>
      <BackHeader title={title} url={url} />
      {children}
      {modal}
    </div>
  );
}
