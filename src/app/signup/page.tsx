'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import FilterModal from '@/app/_component/organism/filterModal';
import { agencyRanges, ageRanges, situationRanges } from '@/constants';
import { OnChangeValueType, ParamsType } from '@/types/globalType';

export default function Signup(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    identity_first: '',
    identity_last: '',
    userName: '',
    phoneNumber: '',
    telecom: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openVarifi, setOpenVarifi] = useState(false);
  const router = useRouter();

  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  // param 모든 값이 존재하는지
  const checkParamsFilled = () => {
    const { identity_first, identity_last, userName, phoneNumber, telecom } =
      params;
    return (
      identity_first && identity_last && userName && phoneNumber && telecom
    );
  };

  const handleNextButtonClick = () => {
    if (checkParamsFilled()) {
      setOpenVarifi(true);
      router.push('/signup/verification');
    }
  };

  const handleAgencySelect = (selectedOptions: string[]) => {
    onChangeValue('telecom', selectedOptions);
    setIsModalOpen(false);
  };
  const resetAgencyOptions = () => {
    onChangeValue('telecom', []);
  };

  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const queryCode = new URL(window.location.href).searchParams.get('code');
    console.log(queryCode);
    if (queryCode) {
      setCode(queryCode);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-dev.vacgom.co.kr/api/v1/oauth/kakao/login?code=${code}`,
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          localStorage.setItem('accessToken', data.token.accessToken);
          setTimeout(() => {
            router.push('/signup');
          }, 1000);
        } else {
          console.error('Failed to fetch data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (code) {
      fetchData();
    }
  }, [code]);

  return (
    <SignupWrapper>
      <BackHeader title={'회원가입'} url={'/vachistory'} />
      <div className="top">정보를 입력해 주세요</div>
      <div className="container">
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
                onChangeValue('identity_first', e.target.value);
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
                onChangeValue('identity_last', e.target.value);
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
          />
        </div>
        <div className="item">
          <InputForm
            placeholder="번호 입력"
            value={params.phoneNumber}
            descriptionTop={'휴대폰 번호'}
            type="text"
            onChange={(e) => {
              onChangeValue('phoneNumber', e.target.value);
            }}
          />
        </div>
      </div>
      <Fragment>
        <FilterModal
          isOpen={isModalOpen}
          title="통신사를 선택해 주세요"
          options={agencyRanges}
          selectedOptions={params.telecom}
          onClose={() => setIsModalOpen(false)}
          onOptionSelect={handleAgencySelect}
          onReset={resetAgencyOptions}
        />
      </Fragment>
      <div className="bottom">
        <button
          className={
            !checkParamsFilled() ? 'confirm_button' : 'confirm_button_Filled'
          }
          onClick={handleNextButtonClick}
          disabled={!checkParamsFilled()}
        >
          다음
        </button>
      </div>
    </SignupWrapper>
  );
}
