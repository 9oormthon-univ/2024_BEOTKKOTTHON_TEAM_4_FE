import React from 'react';
import Image from 'next/image';
import { Images } from '@globalStyles';
import Accordion from '@/app/_component/atom/Accordion';
import {
  DiseaseDetailContainer,
  DiseaseImageContainer,
  DiseaseInfoContainer,
  DiseaseName,
  DiseaseDescription,
  DiseaseNameContainer,
  Icon
} from './styles';

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
          <DiseaseNameContainer>
            <Icon>
              <Image
                src={Images.ico_check_filled}
                alt=""
                width={24}
                height={24}
              />
            </Icon>
            <DiseaseName>{disease.vacName}</DiseaseName>
          </DiseaseNameContainer>
          <DiseaseDescription>{disease.vacDes}</DiseaseDescription>
        </DiseaseInfoContainer>
        <Accordion qaList={disease.qaList} />
      </DiseaseDetailContainer>
    </>
  );
};

export default DiseaseDetail;
