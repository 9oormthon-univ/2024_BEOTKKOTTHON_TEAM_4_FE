'use client';
import React from 'react';
import { VaccineCardWrapper } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';
import { LocalStorage } from '@/hooks/useUtil';
import SkeletonScreen from '@/app/_component/temp/SkeletonScreen';

interface CardType {
  account_id?: string;
  vaccineName?: string;
  subLabel?: string;
  date?: string;
  image?: string;
  variant?: string;
  definition?: boolean;
  loading?: boolean;
  type?: 'NATION' | 'EXTRA' | 'EVENT';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function VaccineCard({
  account_id,
  vaccineName,
  subLabel,
  date,
  definition,
  image,
  variant = 'primary',
  loading = false,
  type,
  onClick,
}: React.PropsWithChildren<CardType>) {
  const onShareButtonClick = () => {
    console.log('shareButton Click');
  };

  if (loading) {
    return <VaccineCardWrapper loading={loading}> </VaccineCardWrapper>;
  }

  return (
    <VaccineCardWrapper
      variant={variant}
      onClick={onClick}
      image={image}
      loading={loading}
      type={type}
    >
      {variant !== 'small' && (
        <div className="top">
          <div className="ordercount">@{account_id}</div>
          <div className="share_button" onClick={onShareButtonClick}>
            <Image src={Images.vacgom} alt={'공유 Icon'} />
          </div>
        </div>
      )}
      <div className="image_wrapper">
        <Image
          src={image}
          alt={'백곰:백신 이미지'}
          className="image"
          width={142}
          height={174}
        />
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
