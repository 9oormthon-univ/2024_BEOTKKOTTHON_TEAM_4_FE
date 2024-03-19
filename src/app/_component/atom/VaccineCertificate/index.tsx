'use client';
import React from 'react';
import { VaccineCardWrapper } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface CardType {
  account_id?: string;
  vaccineName?: string;
  subLabel?: string;
  date?: string;
  image: string;
  variant?: string;
  definition?: string;
}

export default function VaccineCard({
  account_id = '회원 아이디',
  vaccineName = 'B형 간염',
  subLabel,
  date = '2024.03.15',
  definition,
  image,
  variant = 'primary',
}: React.PropsWithChildren<CardType>) {
  const onShareButtonClick = () => {
    console.log('shareButton Click');
  };

  return (
    <VaccineCardWrapper variant={variant}>
      {variant !== 'small' && (
        <div className="top">
          <div className="ordercount">@{account_id}</div>
          <div className="share_button" onClick={onShareButtonClick}>
            <Image src={Images.share} alt={'공유 Icon'} />
          </div>
        </div>
      )}
      <div className="image_wrapper">
        <Image src={image} alt={'백곰:백신 이미지'} className="image" />
      </div>
      <div className="bottom_content">
        <div className="label">{vaccineName}</div>
        <div className="sublabel_wrap">
          {subLabel && <div className="sublabel">{subLabel}</div>}
          <div className="percent">{date}</div>
        </div>
        {definition && <div className="definition">{definition}</div>}
      </div>
      <div className="bottom"></div>
    </VaccineCardWrapper>
  );
}
