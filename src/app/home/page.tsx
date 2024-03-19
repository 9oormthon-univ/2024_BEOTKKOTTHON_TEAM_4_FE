'use client';
import * as React from 'react';
import { HomeWrap } from './style';
import Image from 'next/image';
import { Colors, Icons, Images } from '@globalStyles';
import { useRouter } from 'next/navigation';

export default function Home(): React.JSX.Element {
  const router = useRouter();

  return (
    <HomeWrap>
      <div className="sub_title">home</div>
    </HomeWrap>
  );
}
