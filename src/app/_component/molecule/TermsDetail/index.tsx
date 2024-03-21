'use client';
import React from 'react';
import { TermsDetailContainer } from './style';
import { MainHeaderType } from '../moleculeType';
import Icon from '@/app/_component/atom/Icon/Icon';
import { Icons } from '@/styles';
import { useRouter } from 'next/navigation';
type props = { title: string; content: string; status: boolean };
const TermsDetail: React.FC<props> = ({ title, content, status }) => {
  const router = useRouter();

  return (
    <TermsDetailContainer>
      <div className="wrap">
        <Icon
          icon={status ? Icons.check_true : Icons.check_default}
          alt={'check'}
        />
        <div className="title">{title}</div>
      </div>
      <div className="content_wrap">{content}</div>
    </TermsDetailContainer>
  );
};

export default TermsDetail;
