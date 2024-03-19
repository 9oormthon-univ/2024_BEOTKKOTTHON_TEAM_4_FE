'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import { MainHeaderType } from '../moleculeType';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';

const MainHeader: React.FC<MainHeaderType> = ({ title, url }) => {
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

export default MainHeader;
