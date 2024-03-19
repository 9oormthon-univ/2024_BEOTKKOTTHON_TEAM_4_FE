'use client';
import { ReactNode, useEffect, useState } from 'react';
import BackHeader from '@/app/_component/molecule/BackHeader';
import * as React from 'react';
import { useRouter } from 'next/router';

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
