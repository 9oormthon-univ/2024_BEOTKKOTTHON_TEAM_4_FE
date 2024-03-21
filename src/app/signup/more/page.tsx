'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
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
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import ValidateCheck from '@/app/_component/atom/ValidateCheck';

export default function Signup(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    id: '',
    password: '',
    password_check: '',
  });
  const [variant, setVariant] = useState<ParamsType>({
    id: '',
    password: '',
    password_check: '',
  });

  const router = useRouter();
  const onChangeValue: OnChangeValueType = (field, value, type) => {
    if (type === 'variant') {
      setVariant((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    } else {
      setParams((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const handleNextButtonClick = () => {
    if (checkParamsFilled()) {
      router.push('/signup/more');

      // @Todo 여기에 api 호출
    }
  };

  return (
    <SignupWrapper>
      <BackHeader title={'예방접종도우미 회원가입'} url={'/signup/info'} />
      <div className="top">정보를 입력해 주세요</div>
      <div className="container">
        <div className="item">
          <InputForm
            placeholder="영문자로 시작하여 영문자, 숫자의 조합"
            value={params.id}
            descriptionTop={'예방접종도우미 아이디'}
            type="text"
            variant={variant.id}
            onChange={(e) => {
              onChangeValue('id', e.target.value);
            }}
          />
          <ValidateCheck label={''} />
        </div>
        <div className="item">
          <InputForm
            placeholder="영문, 숫자, 특수문자 조합 9자 이상"
            value={params.password}
            descriptionTop={'예방접종도우미 비밀번호'}
            type="text"
            variant={variant.password}
            onChange={(e) => {
              onChangeValue('password', e.target.value);
            }}
          />
        </div>
        <div className="item">
          <InputForm
            placeholder="비밀번호를 다시 입력해 주세요"
            value={params.password_check}
            descriptionTop={'비밀번호 확인'}
            type="text"
            variant={variant.password_check}
            onChange={(e) => {
              onChangeValue('password_check', e.target.value);
            }}
            onKeyDown={(e) => {
              if (params.password !== params.password_check) {
                onChangeValue('password_check', 'error', 'variant');
              }
            }}
          />
        </div>
      </div>

      <BottomButton
        filled={!checkParamsFilled(params)}
        handleNextButtonClick={handleNextButtonClick}
      />
    </SignupWrapper>
  );
}
