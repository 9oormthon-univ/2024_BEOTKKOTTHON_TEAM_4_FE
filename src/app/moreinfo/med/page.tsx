'use client';
import * as React from 'react';
import { Suspense, useEffect, useState } from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';

import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';

export default function Join(): React.JSX.Element {
  const router = useRouter();
  const { queryparams, onChangeValue } = useQueryParams();

  const handleClick = () => {
    router.push(`/moreinfo/id`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JoinWrap>
        <BackHeader title={' '} url={'/moreinfo/pre'} counter={3} />
        <JoinTemplate
          title={'장기이식 경험이 있으신가요?'}
          subTop={'장기 이식 경험이 있는 분께 꼭 필요한 백신과'}
          subBottom={'금기해야 할 백신을 알려드릴게요'}
          falseLabel={'장기이식 경험이 없어요'}
          trueLabel={'장기이식 경험이 있어요'}
          params={queryparams}
          field={'transYn'}
          onChangeValue={onChangeValue}
        />
        <BottomButton
          filled={queryparams.signupState === false}
          handleNextButtonClick={() => {
            handleClick();
          }}
        />
      </JoinWrap>
    </Suspense>
  );
}
