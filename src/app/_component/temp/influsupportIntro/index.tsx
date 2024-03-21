import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

const MainSection = styled.div`
  width: 393px;
  min-height: 100vh;
  padding: 20px 20px 0px 20px;
  margin-top: -20px;
  gap: 0px;
  opacity: 0px;
`;

const SupportIntro = () => {
  return (
    <MainSection>
      <Image src={Images.ico_support_intro} alt="" />
    </MainSection>
  );
};

export default SupportIntro;
