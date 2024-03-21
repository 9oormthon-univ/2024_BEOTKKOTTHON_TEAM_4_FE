'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import * as queryString from 'querystring';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import { fetchAccessToken } from '@/hooks/useKakaoLogin';

export default function Join(): React.JSX.Element {
  const router = useRouter();
  const { queryparams, onChangeValue } = useQueryParams();

  const handleClick = () => {
    router.push(`/moreinfo/trans`);
  };

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/moreinfo/med'} counter={4} />
      <JoinTemplate
        title={'의료기관 종사자이신가요?'}
        subTop={'의료기관 종사자에게 '}
        subBottom={'꼭 필요한 백신을 알려드릴게요'}
        falseLabel={'의료기관 종사자가 아니에요'}
        trueLabel={'의료기관 종사자에요'}
        params={queryparams}
        field={'medYn'}
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
