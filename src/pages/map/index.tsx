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
  background-color: #4196fd;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  background-image: url('${Images.ico_map_home}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > img {
    width: 100vw;
  }
`;

const MainHomeContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -60px;
`;

const MainText = styled.div`
  position: absolute;
  top: 3%;
  left: 9%;
  transform: translate(-10%, 0);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.03em;
  color: #ffffff99;
  padding: 5px;
`;

const SubText = styled.div`
  position: absolute;
  top: 10%;
  left: 9%;
  transform: translate(-11%, 0);
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: #e5f0ffcc;
  padding: 5px;
`;

export default function MapHome() {
  return (
    <>
      <MainHeader title="병원조회" />
      <MapHomeContainer>
        <ImageContainer>
          <Image src={Images.ico_map_home} alt="" />
          <MainText>20대가 국가 예방접종 지원 사업을 통해</MainText>
          <SubText>지금 지원받을 수 있는<br /><span style={{ color: '#FFFFFF' }}>2개의 백신</span>이 있어요</SubText>
        </ImageContainer>
      </MapHomeContainer>
      <MainHomeContainer>
        <MainMap />
      </MainHomeContainer>
      <NavigationFixed />
    </>
  );
}
