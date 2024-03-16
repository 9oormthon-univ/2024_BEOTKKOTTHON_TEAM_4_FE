import React from 'react';
import { HeaderContainer, Title, NotificationIcon } from './styles';
import { MainHeaderType } from '../atomType';

const MainHeader: React.FC<MainHeaderType> = ({ title, customStyle }) => {
  return (
    <HeaderContainer css={customStyle}>
      <Title>{title}</Title>
      <NotificationIcon className="material-icons">notifications</NotificationIcon>
    </HeaderContainer>
  );
};

export default MainHeader;
