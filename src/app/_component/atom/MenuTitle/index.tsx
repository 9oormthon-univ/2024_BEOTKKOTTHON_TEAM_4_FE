import React from 'react';
import { MenuTitleContainer } from './styles';
import { MainHeaderType, MenuTitleType, SerializedStyles } from '../atomType';
import { Icons, Images } from '@globalStyles';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/app/_component/atom/Icon/Icon';

const MenuTitle: React.FC<MenuTitleType> = ({
  title = '접종 인증서',
  username = '',
  rightIconUrl,
}) => {
  return (
    <MenuTitleContainer>
      <Link className="link" href={rightIconUrl}>
        <div className="content_title">
          {username && username}
          {title}
        </div>
        <Icon icon={Icons.arrow_right} />
      </Link>
    </MenuTitleContainer>
  );
};

export default MenuTitle;
