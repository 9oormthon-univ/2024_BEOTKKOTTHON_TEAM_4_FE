'use client';

import * as React from 'react';
import { MoreIdentityWrapper } from './style';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import FilterModal from '@/app/_component/organism/filterModal';
import { agencyRanges, ageRanges, situationRanges } from '@/constants';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import {
  parseIdentity,
  filterNumericInput,
  checkParamsFilled,
  LocalStorage,
  SecureLocalStorage,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import { postchallenge } from '@/app/_lib/postchallenge';
import secureLocalStorage from 'react-secure-storage';
import { postRegister } from '@/app/_lib/postRegister';
import WarningToast from '@/app/_component/atom/WarningToast';
import { postLogin } from '@/app/_lib/postLogin';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';
import LoadingPage from '@/app/_component/temp/Loading';

export default function MoreIdentity(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    identity_first: '',
    identity_last: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [filled, setFilled] = useState(false);
  const router = useRouter();
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleNextButtonClick = async () => {
    if (filled) {
      try {
        setLoading(true); // 로딩 시작
        const response = await postRegister(params);
        const vaccination = await postLogin(params);
        if (vaccination) {
          LocalStorage.setItem('type', 'submit');
          LocalStorage.setItem('vaccineList', JSON.stringify(vaccination.data));
          router.push(`/signup/done`);
        } else {
          setError(response.message);
        }
      } catch (error) {
        console.error('Signup failed:', error.message);
        router.push(`/signup`);
      } finally {
        setLoading(false);
      }
    }
  };
  /**
   *  이전 페이지 데이터 끌고 오는
   */
  useEffect(() => {
    let id = SecureLocalStorage.getItem('id');
    let password = SecureLocalStorage.getItem('password');

    setParams({
      ...params,
      id,
      password,
    });
  }, []);

  useEffect(() => {
    if (
      params.identity_first.trim().length >= 6 &&
      params.identity_last.trim().length >= 7 &&
      params.identity_first.trim() !== '' &&
      params.identity_last.trim() !== ''
    ) {
      setFilled(true);
    }
  }, [params]);

  return (
    <MoreIdentityWrapper>
      <BackHeader title={'예방접종도우미 내역 조회'} url={''} />
      <div className="top">
        주민등록번호 13자를 <br />
        모두 입력해주세요
      </div>
      <div className="top_sub">
        백신 내역 조회를 위해 한 번만 사용되고 <br /> 다른 용도로 사용되지
        않아요
      </div>
      <div className="container">
        <div className="item">
          <div className="input_title">주민등록번호</div>
          <div className="item_row">
            <InputForm
              placeholder="앞자리 입력"
              value={params.identity_first}
              type="text"
              maxLength={6}
              onChange={(e) => {
                let filteredValue = filterNumericInput(e);
                onChangeValue('identity_first', filteredValue);
              }}
            />
            <p>-</p>
            <InputForm
              placeholder="뒷자리 입력"
              value={params.identity_last}
              type="password"
              maxLength={7}
              onChange={(e) => {
                onChangeValue('identity_last', filterNumericInput(e));
              }}
            />
          </div>
        </div>
      </div>

      <WarningToastWrap errorMessage={error} setErrorMessage={setError} />

      {loading && <LoadingPage />}
      {!loading && (
        <BottomButton
          filled={filled}
          handleNextButtonClick={handleNextButtonClick}
        />
      )}
    </MoreIdentityWrapper>
  );
}
