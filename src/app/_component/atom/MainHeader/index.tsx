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
      <Link href="/alert">
        <Image src={Images.notification} alt="Notification" style={{ cursor: 'pointer' }} />
      </Link>
    </HeaderContainer>
  );
};

export default MainHeader;
