import React from 'react';
import { HeaderContainer, Title } from './styles';
import { MainHeaderType } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';
import Link from 'next/link';

const MainHeader: React.FC<MainHeaderType> = ({ title, customStyle }) => {
  return (
    <HeaderContainer css={customStyle}>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default MainHeader;
