'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';

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
    router.push(`/moreinfo/med`);
  };

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/moreinfo/dis'} counter={2} />
      <JoinTemplate
        title={'임신 중이신가요?'}
        subTop={'임신 중에 꼭 필요한 백신과 '}
        subBottom={'금기해야 할 백신을 알려드릴게요'}
        falseLabel={'임신 중이 아니에요'}
        trueLabel={'임신 중이에요'}
        params={queryparams}
        field={'preYn'}
        onChangeValue={onChangeValue}
      />
      <BottomButton
        filled={queryparams.signupState === false}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}
