'use client';
import React from 'react';
import { VaccineCardWrapper } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface CardType {
  ordercount: string;
  vaccineName: string;
  subLabel: string;
  percent: string;
  image: string;
  variant: string;
}

export default function VaccineCard({
  ordercount = '첫 번째 백신',
  vaccineName = 'B형 간염',
  subLabel = '전체 가입자 접종률',
  percent = '55%',
  image,
  variant = 'primary',
}: React.PropsWithChildren<CardType>) {
  const onShareButtonClick = () => {
    console.log('shareButton Click');
  };

  return (
    <VaccineCardWrapper variant={variant}>
      <div className="top">
        <div className="ordercount">{ordercount}</div>
        <div className="share_button" onClick={onShareButtonClick}>
          <Image src={Images.share} alt={'공유 Icon'} />
        </div>
      </div>
      <div className="image_wrapper">
        <Image src={image} alt={'백곰:백신 이미지'} className="image" />
      </div>
      <div className="bottom">
        <div className="label">{vaccineName}</div>
        <div className="sublabel_wrap">
          <div className="sublabel">{subLabel}</div>
          <div className="percent">{percent}</div>
        </div>
      </div>
    </VaccineCardWrapper>
  );
}
