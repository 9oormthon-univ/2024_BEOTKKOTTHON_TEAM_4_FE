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
  const { params, onChangeValue } = useQueryParams();

  const handleClick = () => {
    router.push(`/moreinfo/pre`);
  };

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} counter={1} />
      <JoinTemplate
        title={'갖고계신 질환이 있으신가요? '}
        subTop={'질환이 있으시다면, 각 질환별로 꼭 필요한 백신과'}
        subBottom={'금기해야 할 백신을 알려드릴게요'}
        falseLabel={'기저질환이 없어요'}
        trueLabel={'기저질환이 있어요'}
        params={params}
        field={'disYn'}
        onChangeValue={onChangeValue}
      />
      <BottomButton
        filled={params.signupState === false}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}
