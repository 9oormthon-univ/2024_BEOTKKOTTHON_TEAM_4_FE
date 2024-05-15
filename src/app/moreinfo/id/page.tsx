'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import { css } from '@emotion/react';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import FilterModal from '@/app/_component/organism/filterModal';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import {
  parseIdentity,
  filterNumericInput,
  checkParamsFilled,
  isAllConditionsTrue,
  SecureLocalStorage,
  LocalStorage,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import ValidateCheck from '@/app/_component/atom/ValidateCheck';
import { postVacSignup } from '@/app/_lib/postVacSignup';
import WarningToast from '@/app/_component/atom/WarningToast';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';
import { PATH } from '@/routes/path';

export default function Id(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    nickname: '',
    healthConditions: [],
  });

  const [error, setError] = useState('');

  const [validate, setValidate] = useState<ParamsType>({
    nickname: {
      condition1: 'default',
      condition2: 'default',
      condition3: 'default',
    },
  });

  useEffect(() => {
    let MEDICAL_WORKER = LocalStorage.getItem('MEDICAL_WORKER');
    let PREGNANCY = LocalStorage.getItem('PREGNANCY');
    let ORGAN_TRANSPLANTATION = LocalStorage.getItem('ORGAN_TRANSPLANTATION');
    let disease = LocalStorage.getItem('disease');
    let diseaseList = [];
    if (disease) {
      diseaseList = disease.split(',');
    }
    let newList = [];
    if (MEDICAL_WORKER === 'true') {
      newList.push('MEDICAL_WORKER');
    }
    if (PREGNANCY === 'true') {
      newList.push('PREGNANCY');
    }
    if (ORGAN_TRANSPLANTATION === 'true') {
      newList.push('ORGAN_TRANSPLANTATION');
    }
    let finalList = [...newList, ...diseaseList];
    setParams((prevState) => ({
      ...prevState,
      healthConditions: finalList,
    }));
  }, []);

  const router = useRouter();
  const allConditionsTrue = isAllConditionsTrue(validate);

  const onChangeValue: OnChangeValueType = (field, value, type) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    updateValidation(field, value);
  };

  const handleNextButtonClick = async () => {
    if (allConditionsTrue) {
      try {
        const response = await postVacSignup(params);
        if (response.success) {
          router.push(PATH.HOME);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error);
      }
    }
  };

  const updateValidation = (field: string, value: string) => {
    switch (field) {
      case 'nickname':
        const isStartWithEnglish = /^[a-zA-Z]/.test(value);
        const isLowerCase = /^[a-z\d]+$/.test(value);
        const isWithinLength = value.length >= 4 && value.length <= 10;

        setValidate((prevValidate) => ({
          ...prevValidate,
          nickname: {
            condition1: isStartWithEnglish ? 'true' : 'false',
            condition2: isLowerCase ? 'true' : 'false',
            condition3: isWithinLength ? 'true' : 'false',
          },
        }));
        break;
      default:
        break;
    }
  };

  return (
    <SignupWrapper>
      <BackHeader title={''} url={PATH.MOREINFO_TRANS} counter={5} />
      <div className="top">백곰에서 사용할 닉네임을 입력해주세요.</div>
      <div className="container">
        <div className="item">
          <InputForm
            placeholder="@닉네임"
            value={params.nickname}
            descriptionTop={'백곰 닉네임'}
            type="text"
            variant={
              validate.nickname.condition1 === 'false' ||
              validate.nickname.condition2 === 'false' ||
              validate.nickname.condition3 === 'false'
                ? 'error'
                : 'default'
            }
            onChange={(e) => {
              onChangeValue('nickname', e.target.value);
            }}
          />
          <div className="wrap">
            <ValidateCheck
              label={'영문 시작'}
              status={validate.nickname.condition1}
            />
            <ValidateCheck
              label={'영문 소문자,숫자'}
              status={validate.nickname.condition2}
            />
            <ValidateCheck
              label={'4-10자 이내'}
              status={validate.nickname.condition3}
            />
          </div>
        </div>
      </div>

      <WarningToastWrap errorMessage={error} setErrorMessage={setError} />

      <BottomButton
        filled={allConditionsTrue}
        handleNextButtonClick={handleNextButtonClick}
      />
    </SignupWrapper>
  );
}
