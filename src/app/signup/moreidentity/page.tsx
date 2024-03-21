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
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';

export default function MoreIdentity(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    identity_first: '',
    identity_last: '',
  });
  // api 요청 시 identity_first 을 parseIdentity 사용하여 변환

  const router = useRouter();
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleNextButtonClick = () => {
    if (checkParamsFilled(params)) {
      router.push('/signup/done?type=submit');
      // @Todo 여기에 api 호출
    }
  };

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
              type="text"
              maxLength={6}
              onChange={(e) => {
                onChangeValue('identity_last', filterNumericInput(e));
              }}
            />
          </div>
        </div>
      </div>

      <BottomButton
        filled={checkParamsFilled(params)}
        handleNextButtonClick={handleNextButtonClick}
      />
    </MoreIdentityWrapper>
  );
}
