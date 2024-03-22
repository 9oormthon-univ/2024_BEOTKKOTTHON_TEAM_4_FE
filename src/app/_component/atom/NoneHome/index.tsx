import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

interface NoneHomeProps {
  title: string;
}

const NoneContainer = styled.header`
  width: 353px;
  height: 140px;
  padding: 10px, 0px, 10px, 0px;
  gap: 10px;
  border-radius: 14px 0px 0px 0px;
  opacity: 0px;
  background#F9FAFB;
  text-align: center;
  z-index: 1000;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.71px;
  text-align: center;
  color: #8b95a1;
`;

const NoneHome: React.FC<NoneHomeProps> = ({ title }) => {
  return (
    <NoneContainer>
      <Image
        src={Images.ico_none_syringe}
        alt="no vaccine"
        style={{ cursor: 'pointer' }}
      />
      <Title>{title}</Title>
    </NoneContainer>
  );
};

export default NoneHome;
