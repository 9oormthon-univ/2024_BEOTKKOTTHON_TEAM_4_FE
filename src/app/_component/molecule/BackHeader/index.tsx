import React from 'react';
import { HeaderContainer, Title } from './style';
import { MainHeaderType } from '../moleculeType';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
import { useRouter } from 'next/navigation';

const MainHeader: React.FC<MainHeaderType> = ({ title, url }) => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Icon
        icon={Icons.arrow_back_ios_new}
        onClick={() => {
          router.push(url);
        }}
      />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default MainHeader;
