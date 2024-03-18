import React from 'react';
import { HeaderContainer, Title, NotificationIcon } from './styles';
import { MainHeaderType } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';

const MainHeader: React.FC<MainHeaderType> = ({ title, customStyle }) => {
  return (
    <HeaderContainer css={customStyle}>
      <Title>{title}</Title>
      <Image src={Images.notification} />
    </HeaderContainer>
  );
};

export default MainHeader;
