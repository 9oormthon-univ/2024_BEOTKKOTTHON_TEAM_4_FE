import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

interface MapMainHeaderProps {
  title: string;
}

const HeaderContainer = styled.header`
  height: 54px;
  padding: 10px 20px;
  background: #4196FD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
  z-index: 1000;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  color: #FFFFFF;
`;

const MapMainHeader: React.FC<MapMainHeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Image src={Images.ico_map_bell} alt="Notifications" />
    </HeaderContainer>
  );
};

export default MapMainHeader;
