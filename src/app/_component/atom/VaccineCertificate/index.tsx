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
  definition?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function VaccineCard({
  account_id = '회원 아이디',
  vaccineName = 'B형 간염',
  subLabel,
  date = '2024.03.15',
  definition,
  image,
  variant = 'primary',
  onClick,
}: React.PropsWithChildren<CardType>) {
  const onShareButtonClick = () => {
    console.log('shareButton Click');
  };

  return (
    <VaccineCardWrapper variant={variant} onClick={onClick}>
      {variant !== 'small' && (
        <div className="top">
          <div className="ordercount">@{account_id}</div>
          <div className="share_button" onClick={onShareButtonClick}>
            <Image src={Images.vacgom} alt={'공유 Icon'} />
          </div>
        </div>
      )}
      <div className="image_wrapper">
        <Image src={image} alt={'백곰:백신 이미지'} className="image" />
      </div>
      <div className="bottom_content">
        <div className="label">{vaccineName}</div>
        <div className="sublabel_wrap">
          {subLabel && <div className="sublabel">접종일자</div>}
          <div className="percent">{date}</div>
        </div>
        {definition && (
          <div className="definition">
            백곰의 접종 인증서는 법적인 효력이 없습니다.
          </div>
        )}
      </div>
      <div className="bottom"></div>
    </VaccineCardWrapper>
  );
}
