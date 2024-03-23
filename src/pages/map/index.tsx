import React from 'react';
import styled from '@emotion/styled';
import MainHeader from '@/app/_component/atom/MapMainHeader';
import Image from 'next/image';
import { Images } from '@globalStyles';
import MainMap from '@/app/_component/organism/mainMap';
import NavigationFixed from '@/app/_component/organism/navigationFixed';

const MapHomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #4196fd;
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: auto;
  background-image: url('${Images.ico_map_home}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > img {
    width : 100vw
    }
    
`;

const MainHomeContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -50px;
`;



export default function MapHome() {

  return (
    <>
      <MainHeader title="병원조회" />
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_map_home} alt="" />
        </ImageContainer>
      </MapHomeContainer>
      <MainHomeContainer>
      <MainMap/>
      </MainHomeContainer>
      <NavigationFixed/>
    </>
  );
}
