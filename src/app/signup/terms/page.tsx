'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import * as queryString from 'querystring';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';

export default function Terms(): React.JSX.Element {
  const router = useRouter();
  const { params, onChangeValue } = useQueryParams();
  console.log(params);
  const handleClick = () => {
    router.push('/signup');
  };

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/signup/join'} />
      <JoinTemplate
        title={'예방접종도우미의 \n' + '약관내용에 동의해주세요'}
        subTop={'회원약관에 동의해야 정상적으로 서비스를 이용할 수 있어요.'}
        trueLabel={'네, 모두 동의합니다.'}
        params={params}
        field={'terms'}
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
