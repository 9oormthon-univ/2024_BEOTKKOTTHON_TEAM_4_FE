import React from 'react';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';

const CurrentLocationButton = styled.div`
  position: absolute;
  left: 30%;
  top: 15px;
  width: 150px;
  height: 40px;
  align-items: center;
  padding: 8px 16px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 5;
  gap: 12px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  text-align: center;
`;

const ClickableArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ReloadButton = ({ onClick }) => (
  <CurrentLocationButton>
    <ClickableArea onClick={onClick}>
      <Image
        src={Images.ico_map_reload}
        alt={'현재 위치 재조회'}
      />
      현재 위치 재검색
    </ClickableArea>
  </CurrentLocationButton>
);

export default ReloadButton;
