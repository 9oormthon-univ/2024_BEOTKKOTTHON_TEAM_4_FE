'use client';

import * as React from 'react';
import { HelperLoginWrapper } from './style';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import {
  checkParamsFilled,
  LocalStorage,
  SecureLocalStorage,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import Link from 'next/link';
import { postSignup } from '@/app/_lib/postSignup';
import { postLogin } from '@/app/_lib/postLogin';
import WarningToast from '@/app/_component/atom/WarningToast';

export default function HelperLogin(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>(() => {
    const storedId = LocalStorage.getItem('id') || '';
    return {
      id: storedId,
      password: '',
    };
  });
  const [error, setError] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>('password');

  const router = useRouter();
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    const storedId = localStorage.getItem('id') || '';
    if (storedId) {
      setParams((prevState) => ({
        ...prevState,
        id: storedId,
      }));
    }
  }, []);

  /**
   *  api 호출
   */
  const handleNextButtonClick = async () => {
    if (checkParamsFilled(params)) {
      try {
        setLoading(true);
        const response = await postLogin(params);
        SecureLocalStorage.setItem('id', params.id);
        SecureLocalStorage.setItem('password', params.password);
        if (response.success) {
          LocalStorage.setItem('type', 'loginEnd');
          LocalStorage.setItem('vaccineList', JSON.stringify(response.data));
          router.push(`/signup/done`);
        } else {
          setError(response.message);
        }
      } finally {
        setLoading(false);
      }
    }
  };
  if (loading) return <div>Loading...</div>;
  return (
    <HelperLoginWrapper>
      <BackHeader title={'예방접종도우미 로그인'} url={'/signup/terms'} />
      <div className="top">정보를 입력해 주세요</div>
      <div className="container">
        <div className="item">
          <InputForm
            placeholder="아이디를 입력해 주세요"
            value={params.id}
            descriptionTop={'예방접종도우미 아이디'}
            type="text"
            onChange={(e) => {
              onChangeValue('id', e.target.value);
            }}
          />
        </div>
        <div className="item">
          <InputForm
            placeholder="비밀번호를 입력해 주세요"
            value={params.password}
            descriptionTop={'예방접종도우미 비밀번호'}
            rightIcon={Icons.eyeSlash}
            onClickRightIcon={() => {
              if (inputType === 'text') setInputType('password');
              else setInputType('text');
            }}
            type={inputType}
            customStyle={css`
              & > .input__content > .input__content--right__icon > img {
                width: 20px;
                height: 20px;
              }
            `}
            onChange={(e) => {
              onChangeValue('password', e.target.value);
            }}
          />
        </div>
        <Link href={'/login/find'} className={'password'}>
          아이디/비밀번호 찾기
        </Link>
      </div>

      {error !== null && <WarningToast message={error} />}
      {!loading && ( // 로딩 중이 아닐 때에만 렌더링
        <BottomButton
          filled={checkParamsFilled(params)}
          handleNextButtonClick={handleNextButtonClick}
        />
      )}
    </HelperLoginWrapper>
  );
}
