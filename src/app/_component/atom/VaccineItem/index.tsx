'use client';
import React from 'react';
import { VaccineItemContainer } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface CardType {
  category: string;
  vaccineName: string;
  subLabel?: string;
  vaccineStatus: boolean;
}

export default function VaccineItem({
  category = '국가 예방접종',
  vaccineName = 'B형 간염',
  subLabel,
  vaccineStatus,
}: React.PropsWithChildren<CardType>) {
  return (
    <VaccineItemContainer>
      <div className="container">
        <div className="section">
          <div className="category">{category}</div>
          <div className="about">
            <div className="vaccineName">{vaccineName}</div>
            {subLabel && <div className="subLabel">{subLabel}</div>}
          </div>
        </div>
        {vaccineStatus ? (
          <Image
            src={Images.vaccine_status_true}
            alt={'백신맞은 이미지'}
            className={'vaccineStatus'}
          />
        ) : (
          <Image
            src={Images.vaccine_status_false}
            className={'vaccineStatus'}
            alt={'백신 맞지 않은 이미지'}
          />
        )}
      </div>
    </VaccineItemContainer>
  );
}
