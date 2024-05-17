'use client';
import React from 'react';
import { VaccineDetailContainer } from './styles';
import Image from 'next/image';
import { Images } from '@/styles';

interface VaccineDetailType {
  vaccineDose?: string;
  inoculationAgency?: string;
  inoculatedAt?: string;
  vaccineName?: string;
  vaccineBrandName?: string;
  lotNo?: string;
}
// @Definition
//   inoculationAgency : 접종기관
//   inoculatedAt : 접종일자
//   vaccineName, : 백신명
//   vaccineBrandName, : 백신브랜드명
//   lotNo : 일련번호

export default function VaccineDetail({
  vaccineDose,
  inoculationAgency = '경상남도 창원시 창원보건소',
  inoculatedAt = '2010.10.28',
  vaccineName = '플루HA코박스PF주',
  vaccineBrandName = '한국백신(주)',
  lotNo = 'PB1001801',
}: React.PropsWithChildren<VaccineDetailType>) {
  const rename = (props: string) => {
    if (props !== '') {
      return ' | ' + props;
    } else {
      return '';
    }
  };
  return (
    <VaccineDetailContainer>
      <div className="container">
        <div className="top">
          <div className="vaccineDose">{vaccineDose}</div>
          <div className="inoculatedAt">{inoculatedAt}</div>
        </div>
        <div className="inoculationAgency">{inoculationAgency}</div>
        <div className="detail">
          <div className="vaccineProductName">{vaccineName}</div>
          <div className="vaccineBrandName">{rename(vaccineBrandName)}</div>
          <div className="lotNo">{rename(lotNo)}</div>
        </div>
      </div>
    </VaccineDetailContainer>
  );
}
