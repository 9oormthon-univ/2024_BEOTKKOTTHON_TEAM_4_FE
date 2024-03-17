import React from 'react';
import { HeaderContainer, Title } from './style';
import { MainHeaderType } from '../moleculeType';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';

const MainHeader: React.FC<MainHeaderType> = ({ title }) => {
  return (
    <HeaderContainer>
      <Icon icon={Icons.arrow_back_ios_new} />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default MainHeader;
