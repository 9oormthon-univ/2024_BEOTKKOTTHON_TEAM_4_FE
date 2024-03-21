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
    if (queryparams.signupState === true) {
      router.push('/home');
    } else {
      router.push(`/signup/terms`);
    }
  };

  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const queryCode = new URL(window.location.href).searchParams.get('code');
    if (queryCode) {
      setCode(queryCode);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const response = await fetchAccessToken(code);
        console.log(response);
        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
        }
      }
    };
    fetchData();
  }, [code]);

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} />
      <JoinTemplate
        title={'예방접종도우미에 가입한 적이 있나요?'}
        subTop={'백곰을 이용하기 위해서는'}
        subBottom={'질병관리청의 예방접종도우미 가입이 필요해요'}
        falseLabel={'아니요, 가입한 적이 없어요'}
        trueLabel={'네, 가입한 적이 있어요'}
        params={queryparams}
        field={'signupState'}
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
