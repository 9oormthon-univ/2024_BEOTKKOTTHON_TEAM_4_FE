'use client';

import * as React from 'react';
import { Skeleton } from './style';
import BackHeader from '@/app/_component/molecule/BackHeader';

export default function SkeletonScreen(): React.JSX.Element {
  return (
    <Skeleton>
      <BackHeader title={''} url={''} />
      <div className="wrap">
        <div className="top ani"></div>
        <div className="top_sub ani"></div>
        <div className="top_middle ani"></div>
        <div className="top_sub ani"></div>
      </div>
    </Skeleton>
  );
}
