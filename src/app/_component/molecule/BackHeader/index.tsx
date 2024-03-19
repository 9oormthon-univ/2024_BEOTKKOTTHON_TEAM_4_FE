'use client';
import React from 'react';
import { HeaderContainer, Title } from './style';
import { MainHeaderType } from '../moleculeType';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
import { useRouter } from 'next/navigation';
import { css } from '@emotion/react';

const MainHeader: React.FC<MainHeaderType> = ({ title, url }) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Icon
        icon={Icons.arrow_left}
        onClick={() => {
          router.push(url);
        }}
        customStyle={css`
          & > img {
            width: 20px;
            height: 20px;
          }
        `}
        size={'20px'}
      />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default MainHeader;
