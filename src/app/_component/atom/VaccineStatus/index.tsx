'use client';
import React, { useState } from 'react';
import { VaccineStatusContainer } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

//여기 로직 수정해야함
interface VaccineStatusType {
  vaccineType: string;
  inoculationOrders: [];
  orderString: string;
  diseaseName: string;
  minOrder: number;
  maxOrder: number;
  isCompleted: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
// @Definition
//   vaccineType :
//   inoculationOrders : 유저가 맞은 횟수
//   orderString, :
//   diseaseName, : 질병명
//   maxOrder : 해당 백신의 총 맞아야 하는 횟수

export default function VaccineStatus({
  vaccineType = 'DTaP',
  inoculationOrders = [],
  minOrder = 1,
  maxOrder = 4,
  diseaseName = '결핵',
  onClick,
  isCompleted,
}: React.PropsWithChildren<VaccineStatusType>) {
  // const [status, setStatus] = useState<boolean>();
  const renderStatusImages = () => {
    const statusImages = [];

    // minOrder부터 maxOrder까지 false로 초기화
    for (let i = 1; i <= 6; i++) {
      if (i >= minOrder && i <= maxOrder) {
        statusImages.push('false');
      } else {
        statusImages.push('enable');
      }
    }

    // inoculationOrders에 해당하는 index를 true로 변경
    inoculationOrders.forEach((order) => {
      // const index = order - minOrder;
      if (order >= 0 && order <= statusImages.length) {
        statusImages[order - 1] = 'true';
      }
    });

    // 이미지 배열 생성
    const images = statusImages.map((status, index) => {
      if (status === 'enable') {
        return (
          <div className={'itemWrap'}>
            <Image
              key={index}
              src={Images.vaccine_status_disable}
              alt={'백신 접종 미완료 이미지'}
            />
            <div className={'disable'}>{index + 1}차</div>
          </div>
        );
      } else if (status === 'false') {
        return (
          <div className={'itemWrap'}>
            <Image
              key={index}
              src={Images.vaccine_status_false}
              alt={'백신 접종 미완료 이미지'}
            />
            <div className={'index'}>{index + 1}차</div>
          </div>
        );
      } else {
        return (
          <div className={'itemWrap'}>
            <Image
              key={index}
              src={Images.vaccine_status_true}
              alt={'백신 접종 완료 이미지'}
            />{' '}
            <div className={'true'}>{index + 1}차</div>
          </div>
        );
      }
    });

    return images;
  };
  return (
    <VaccineStatusContainer onClick={onClick}>
      <div className="container">
        <div className="top">
          <div className="diseaseName">{diseaseName}</div>
          <div className="vaccineType">{vaccineType}</div>
        </div>
        <div className="detail">{renderStatusImages()}</div>
      </div>
    </VaccineStatusContainer>
  );
}
