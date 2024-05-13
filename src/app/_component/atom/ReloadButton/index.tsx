import React from 'react';
import { Images } from '@globalStyles';
import Image from 'next/image';
import {Text, CurrentLocationButton, ClickableArea } from './style'

const ReloadButton = ({ onClick }) => (
  <CurrentLocationButton>
    <ClickableArea onClick={onClick}>
      <Image
        src={Images.ico_map_reload}
        alt={'현재 위치 재조회'}
      />
      <Text>
      현재 위치 재검색
      </Text>
    </ClickableArea>
  </CurrentLocationButton>
);

export default ReloadButton;
