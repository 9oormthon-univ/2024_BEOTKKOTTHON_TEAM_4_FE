'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';


export interface RouteHeaderType {
  title: string;
  url?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const RouteHeader: React.FC<RouteHeaderType> = ({ title, url }) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <div onClick={() => router.push(url)} style={{ cursor: 'pointer' }}>
        <Image
          src={Images.arrow_left}
          alt="Back"
          width={20}
          height={20}
        />
      </div>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default RouteHeader;
