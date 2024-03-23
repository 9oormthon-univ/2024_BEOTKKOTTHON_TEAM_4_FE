import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/RouteHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';

const MapHomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: auto;
  margin-top: 200px;
  margin-left: 130px;
`;

export default function SeeAgain() {
  return (
    <>
      <MainHeader title="" url="/my" />
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_see_again} alt="" />
        </ImageContainer>
      </MapHomeContainer>
    </>
  );
}
