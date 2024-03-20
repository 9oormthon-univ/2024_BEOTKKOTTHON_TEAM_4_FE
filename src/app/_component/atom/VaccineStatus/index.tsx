'use client';
import React, { useState } from 'react';
import { VaccineStatusContainer } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface VaccineStatusType {
  vaccineType?: string;
  order?: number;
  orderString?: string;
  diseaseName?: string;
  maxOrder?: number;
}
// @Definition
//   vaccineType :
//   order : 유저가 맞은 횟수
//   orderString, :
//   diseaseName, : 질병명
//   maxOrder : 해당 백신의 총 맞아야 하는 횟수

export default function VaccineStatus({
  vaccineType = 'DTaP',
  order = 4,
  orderString = '4차',
  maxOrder = 2,
  diseaseName = '결핵',
}: React.PropsWithChildren<VaccineStatusType>) {
  // const [status, setStatus] = useState<boolean>();

  const renderStatusImages = () => {
    const statusImages = [];
    for (let i = 0; i < 6; i++) {
      if (i < order) {
        statusImages.push(
          <Image
            key={i}
            src={Images.vaccine_status_true}
            alt={'백신 접종 완료 이미지'}
          />,
        );
      } else if (i < maxOrder) {
        statusImages.push(
          <Image
            key={i}
            src={Images.vaccine_status_false}
            alt={'백신 접종 미완료 이미지'}
          />,
        );
      } else {
        statusImages.push(
          <Image
            key={i}
            src={Images.vaccine_status_disable}
            alt={'백신 접종 미완료 이미지'}
          />,
        );
      }
    }
    return statusImages;
  };
  return (
    <VaccineStatusContainer>
      <div className="container">
        <div className="top">
          <div className="status">
            {order === maxOrder && <div className="complete">접종완료</div>}
          </div>
          <div className="diseaseName">{diseaseName}</div>
          <div className="vaccineType">{vaccineType}</div>
        </div>
        <div className="detail">{renderStatusImages()}</div>
      </div>
    </VaccineStatusContainer>
  );
}
