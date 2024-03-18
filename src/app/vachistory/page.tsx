'use client';

import * as React from 'react';
import { Container } from './style';
import VaccineCard from '@/app/_component/atom/Vaccine/index';
import { Icons, Images } from '@globalStyles';
import Icon from '@/app/_component/atom/Icon/Icon';
import Link from 'next/link';
import SectionHeader from '@/app/_component/atom/SectionHeader';
import MainHeader from '@/app/_component/atom/MainHeader';

export default function Vachistory() {
  return (
    <Container>
      <MainHeader title="접종내역" />
      <div className="body_wrap">
        <div className="content_head">
          <div className="content_title">접종 인증서</div>
          <Link className="all" href={'/vachistory/certificate/list'}>
            전체 보기
          </Link>
        </div>
        <div className="content_body">
          <div className="item">접종 인증서</div>
          <div className="item">접종 인증서</div>
          <div className="item">접종 인증서</div>
          <div className="item">접종 인증서</div>
          <div className="item">접종 인증서</div>
        </div>
        <div className="content_more">
          백곰의 접종 인증서는 법적인 효력이 없습니다. <br />
          실제 예방접종 증명서는 예방접종도우미사이트, 정부24 등에서
          발급받아주세요.
        </div>

        <div className="content_head">
          <div className="content_title">예방접종 내역</div>
          <Link className="all" href={'/vachistory/vaccine/national'}>
            전체 보기
          </Link>
        </div>
      </div>
    </Container>
  );
}
