import React from 'react';
import Image from 'next/image';
import { Images } from '@globalStyles';
import { NoneContainer, Title, ImageContainer } from './styles'

interface NoneHomeProps {
  title: string;
}


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
