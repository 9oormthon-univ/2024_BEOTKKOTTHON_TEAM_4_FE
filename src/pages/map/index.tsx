import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MapMainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';

const MapHomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #4196fd;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url('${Images.ico_map_vacgom}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function MapHome() {
  return (
    <>
      <MainHeader title="병원조회" />
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_map_vacgom} alt="" />
        </ImageContainer>
      </MapHomeContainer>
    </>
  );
}
