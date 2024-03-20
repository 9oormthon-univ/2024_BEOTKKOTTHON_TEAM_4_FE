// 'use client';
import React from 'react';
import { VaccineItemContainer } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface VaccineDetailType {
  vaccineDose: boolean;
  inoculationAgency: string;
  inoculatedAt: string;
  vaccineProductName?: string;
  vaccineBrandName: string;
  lotNo: string;
}
// @Definition
//   inoculationAgency : 접종기관
//   inoculatedAt : 접종일자
//   vaccineProductName, : 백신제품명
//   vaccineBrandName, : 백신브랜드명
//   lotNo : 일련번호

export default function VaccineDetail({
  vaccineDose = 1,
  inoculationAgency = '경상남도 창원시 창원보건소',
  inoculatedAt = '2010.10.28',
  vaccineProductName = '플루HA코박스PF주',
  vaccineBrandName = '한국백신(주)',
  lotNo = 'PB1001801',
}: React.PropsWithChildren<VaccineDetailType>) {
  return (
    <VaccineItemContainer>
      <div className="container">
        <div className="top">
          <div className="vaccineDose">{vaccineDose}차</div>
          <div className="inoculatedAt">{inoculatedAt}</div>
        </div>
        <div className="inoculationAgency">{inoculationAgency}</div>
        <div className="detail">
          <div className="vaccineProductName">{vaccineProductName} |</div>
          <div className="vaccineBrandName">{vaccineBrandName} |</div>
          <div className="lotNo">{lotNo}</div>
        </div>
      </div>
    </VaccineItemContainer>
  );
}
