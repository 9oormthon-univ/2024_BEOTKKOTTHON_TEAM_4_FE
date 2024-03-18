'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import Image from 'next/image';
import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';

export default function Signup(): React.JSX.Element {
  return (
    <SignupWrapper>
      <BackHeader title={'/login'} url={'/vachistory'} />
    </SignupWrapper>
  );
}
