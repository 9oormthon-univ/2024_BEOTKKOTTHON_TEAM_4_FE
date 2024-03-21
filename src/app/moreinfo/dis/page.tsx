'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import * as queryString from 'querystring';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import { fetchAccessToken } from '@/hooks/useKakaoLogin';
import Button from '@/app/_component/atom/button/button';
import { diseaseButttonList } from '@/utils/disease-button-api';
import { fontGenerator } from '@/styles';

export default function Join(): React.JSX.Element {
  const router = useRouter();
  const { queryparams, onChangeValue } = useQueryParams();
  const [count, setCount] = useState(0);
  const [params, setParams] = useState({ disease: [] });
  console.log(params);
  const handleClick = () => {
    router.push(`/moreinfo/pre`);
  };
  const onChangeParams: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleChangeValue = (first) => {
    const updatedDisease = [...params.disease];
    const existingIndex = updatedDisease.indexOf(first);
    if (existingIndex !== -1) {
      updatedDisease.splice(existingIndex, 1);
    } else {
      updatedDisease.push(first);
    }
    setParams({ disease: updatedDisease });
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
        params={queryparams}
        field={'disYn'}
        onChangeValue={onChangeValue}
      />

      {queryparams.disYn && (
        <>
          <div className="wrap">
            <div className="title">질환을 선택해 주세요</div>
            <div className="subtitle">
              <p>중복 선택이 가능해요!</p>
              <p>{params.disease.length}/11</p>
            </div>
          </div>
          <div className="contents">
            {diseaseButttonList.map((item, index) => (
              <Button
                key={index}
                label={item.second}
                onClick={() => handleChangeValue(item.first)}
                variant={
                  params.disease.includes(item.first) ? 'primary' : 'UnSelect'
                }
                customStyle={css`
                  ${fontGenerator('14px', '500', '16.71px')}
                  max-width: fit-content;
                  border-radius: 100px;
                `}
              />
            ))}
          </div>
        </>
      )}

      <BottomButton
        filled={queryparams.signupState === false}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}
