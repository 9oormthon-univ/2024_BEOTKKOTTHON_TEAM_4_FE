import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

const MapHomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  height: auto;
  margin-top: 250px;
  margin-left: 80px;
`;

export default function SeeAgain() {
  return (
    <>
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_see_again} alt="" />
        </ImageContainer>
      </MapHomeContainer>
    </>
  );
}
