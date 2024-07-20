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
import { fetchAccessToken } from '@/hooks/useKakaoLogin';
import { LocalStorage } from '@/hooks/useUtil';
import { PATH } from '@/routes/path';

export default function Signup(): React.JSX.Element {
  const router = useRouter();
  const [params, setParam] = useState({
    signupState: undefined,
  });
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParam((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleClick = () => {
    if (params.signupState === true) {
      router.push(PATH.LOGIN);
    } else {
      router.push(PATH.SIGNUP_TERMS);
    }
  };

  const [code, setCode] = useState<string | null>(null);

  const fetchData = async () => {
    if (code) {
      const response = await fetchAccessToken(code);
      if (response?.accessToken) {
        LocalStorage.setItem('accessToken', response.accessToken);
      }
      if (response?.data.member.role === 'ROLE_USER') {
        LocalStorage.setItem('accessToken', response.accessToken);
        router.push(PATH.HOME);
      }
    }
  };

  useEffect(() => {
    const queryCode = new URL(window.location.href).searchParams.get('code');
    if (queryCode) {
      setCode(queryCode);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [code]);

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} />

      <BottomButton
        filled={params.signupState !== undefined}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}
