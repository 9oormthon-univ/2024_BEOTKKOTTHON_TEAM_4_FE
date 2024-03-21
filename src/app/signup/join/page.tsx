'use client';
import * as React from 'react';
import { useState } from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import * as queryString from 'querystring';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';

export default function Join(): React.JSX.Element {
  const router = useRouter();
  const { params, onChangeValue } = useQueryParams();

  const handleClick = () => {
    if (params.signupState === true) {
      router.push(`/signup/terms`);
    } else {
      router.push('/home');
    }
  };
  const queryStringified = queryString.stringify(params);

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} />
      <JoinTemplate
        title={'예방접종도우미에 가입한 적이 있나요?'}
        subTop={'백곰을 이용하기 위해서는'}
        subBottom={'질병관리청의 예방접종도우미 가입이 필요해요'}
        falseLabel={'아니요, 가입한 적이 없어요'}
        trueLabel={'네, 가입한 적이 있어요'}
        params={params}
        field={'signupState'}
        onChangeValue={onChangeValue}
      />
      <BottomButton
        filled={params.signupState === null}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}