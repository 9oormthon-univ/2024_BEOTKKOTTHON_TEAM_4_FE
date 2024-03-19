import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const DiseaseDetailContainer= styled.div`
  padding: 20px, 20px, 0px, 20px; 
`

const DiseaseImageContainer = styled.div`
  width: 80%;
  height: 290px;
  padding-top: 30px;
  background: #f9fafb;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const DiseaseInfoContainer = styled.div`
  width: 80%;
  padding: 30px 24px;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
`;

const DiseaseName = styled.h1`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  margin-bottom: 5px;
  color: #333d4b;
`;

const DiseaseDescription = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #6b7684;
`;

const DiseaseDetail = ({ disease }) => {
  return (
    <>
      <DiseaseDetailContainer>
        <DiseaseImageContainer>
          <Image
            src={disease.iconsImage}
            alt={disease.vacName}
            width={230}
            height={230}
          />
        </DiseaseImageContainer>
        <DiseaseInfoContainer>
          <DiseaseName>{disease.vacName}</DiseaseName>
          <DiseaseDescription>{disease.vacDes}</DiseaseDescription>
        </DiseaseInfoContainer>
      </DiseaseDetailContainer>
    </>
  );
};

export default DiseaseDetail;
