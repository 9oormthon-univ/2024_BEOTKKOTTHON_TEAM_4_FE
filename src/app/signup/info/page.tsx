'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import { agencyRanges } from '@/constants';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import {
  parseIdentity,
  filterNumericInput,
  checkParamsFilled,
  LocalStorage,
  SecureLocalStorage,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import secureLocalStorage from 'react-secure-storage';
import FilterRadioModal from '@/app/_component/organism/filterRadioModal';
import { postSignup } from '@/app/_lib/postSignup';
import WarningToast from '@/app/_component/atom/WarningToast';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';
import SkeletonScreen from '@/app/_component/temp/SkeletonScreen';

export default function Signup(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    identity_first: '',
    identity_last: '',
    userName: '',
    phoneNumber: '',
    telecom: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
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

  /**
   *  api 호출
   */
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [errormessage, setErrormessage] = useState(''); // 로딩 상태 추가
  const handleNextButtonClick = async () => {
    if (checkParamsFilled(params)) {
      try {
        setLoading(true);
        const response = await postSignup(params);

        if (!response.success) {
          setErrormessage(response.message);
          return;
        }
        LocalStorage.setItem('secureNoImage', response.data.secureNoImage);
        router.push(
          `/signup/captcha?secureNoImage=${response.data.secureNoImage}`,
        );
      } catch (error) {
        console.error('Signup failed:', error.message);
      } finally {
        setLoading(false); // 로딩 종료
      }
    }
  };

  const handleAgencySelect = (selectedOptions) => {
    onChangeValue('telecom', selectedOptions);
    setIsModalOpen(false);
  };
  const resetAgencyOptions = () => {
    onChangeValue('telecom', []);
  };

  if (loading) return <SkeletonScreen />;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupWrapper>
        <BackHeader title={'예방접종도우미 회원가입'} url={'/signup/more'} />
        <div className="top">정보를 입력해 주세요</div>
        <div className="container">
          <div className="item">
            <InputForm
              placeholder="이름"
              value={params.userName}
              descriptionTop={'이름'}
              type="text"
              onChange={(e) => {
                onChangeValue('userName', e.target.value);
              }}
            />
          </div>
          <div className="item">
            <InputForm
              placeholder="통신사"
              value={params.telecom}
              descriptionTop={'통신사'}
              rightIcon={Icons.arrow_down}
              type="text"
              customStyle={css`
                & > .input__content > .input__content--right__icon > img {
                  width: 24px;
                  height: 24px;
                }
              `}
              onClick={() => {
                setIsModalOpen(true);
              }}
              readOnly
            />
          </div>
          <div className="item">
            <InputForm
              placeholder="번호 입력"
              value={params.phoneNumber}
              descriptionTop={'휴대폰 번호'}
              type="text"
              onChange={(e) => {
                let filteredValue = filterNumericInput(e);
                if (filteredValue.length > 11) {
                  filteredValue = filteredValue.slice(0, 11);
                }
                onChangeValue('phoneNumber', filteredValue);
              }}
            />
          </div>
          <div className="item">
            <div className="input_title">주민등록번호</div>
            <div className="item_row">
              <InputForm
                placeholder="YYMMDD"
                value={params.identity_first}
                type="text"
                maxLength={6}
                customStyle={css`
                  width: 50%;
                `}
                onChange={(e) => {
                  let filteredValue = filterNumericInput(e);
                  onChangeValue('identity_first', filteredValue);
                }}
              />
              <p>-</p>
              <InputForm
                placeholder=""
                value={params.identity_last}
                type="text"
                maxLength={1}
                customStyle={css`
                  width: 60px;
                `}
                onChange={(e) => {
                  onChangeValue('identity_last', filterNumericInput(e));
                }}
              />
              <div className="hiden_item">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <Fragment>
          <FilterRadioModal
            isOpen={isModalOpen}
            title="통신사를 선택해 주세요"
            options={agencyRanges}
            selectedOptions={params.telecom}
            onClose={() => setIsModalOpen(false)}
            onOptionSelect={handleAgencySelect}
            onReset={resetAgencyOptions}
          />
        </Fragment>

        <WarningToastWrap
          errorMessage={errormessage}
          setErrorMessage={setErrormessage}
        />

        {!loading && (
          <BottomButton
            filled={checkParamsFilled(params)}
            handleNextButtonClick={handleNextButtonClick}
          />
        )}
      </SignupWrapper>
    </Suspense>
  );
}
