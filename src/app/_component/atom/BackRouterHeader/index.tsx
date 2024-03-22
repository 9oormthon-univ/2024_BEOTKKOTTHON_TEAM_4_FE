'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { useRouter } from 'next/router';


export interface BackRouteHeaderType {
  title: string;
  onBack: () => void;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const BackRouteHeader: React.FC<BackRouteHeaderType> = ({ title, onBack }) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <div onClick={onBack} style={{ cursor: 'pointer' }}>
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

export default BackRouteHeader;

