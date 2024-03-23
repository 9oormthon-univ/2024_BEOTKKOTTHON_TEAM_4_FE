import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

interface NoneHomeProps {
  title: string;
}

const NoneContainer = styled.header`
  width: 100%;
  height: 140px;
  padding: 16px, 21.77px, 16px, 21.77px
  gap: 10px;
  border-radius: 14px;
  opacity: 0px;
  background#F9FAFB;
  text-align: center;
  z-index: 1000;
  background: #F9FAFB;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: center;
  color: #8b95a1;
  
`;

const ImageContainer = styled.div`
  margin-top: 40px;
`

const NoneHome: React.FC<NoneHomeProps> = ({ title }) => {
  return (
    <NoneContainer>
      <ImageContainer>
      <Image
        src={Images.ico_none_syringe}
        alt="no vaccine"
        style={{ cursor: 'pointer' }}
      />
      <Title>{title}</Title>
      </ImageContainer>
    </NoneContainer>
  );
};

export default NoneHome;
