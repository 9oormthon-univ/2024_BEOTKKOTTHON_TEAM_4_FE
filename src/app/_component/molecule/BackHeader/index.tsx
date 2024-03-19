'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import { MainHeaderType } from '../moleculeType';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/navigation';

const MainHeader: React.FC<MainHeaderType> = ({ title, url }) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <div onClick={() => router.push(url)} style={{ cursor: 'pointer' }}>
        <Image src={Images.arrow_left} alt="Back" width={24} height={24} />
      </div>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default MainHeader;
