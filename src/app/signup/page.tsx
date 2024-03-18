'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import FilterModal from '@/app/_component/organism/filterModal';
import { agencyRanges, ageRanges, situationRanges } from '@/constants';

export default function Signup(): React.JSX.Element {
  // const [params, setParams] = useState<>();
  const [selectedAgency, setSelectedAgency] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAgencySelect = (selectedOptions: string[]) => {
    setSelectedAgency(selectedOptions);
    setIsModalOpen(false);
  };
  const resetAgencyOptions = () => {
    setSelectedAgency([]);
  };

  return (
    <SignupWrapper>
      <BackHeader title={'회원가입'} url={'/vachistory'} />
      <div className="top">정보를 입력해 주세요</div>
      <div className="container">
        <div className="item">
          <div className="input_title">주민등록번호</div>
          <div className="item_row">
            <InputForm
              placeholder="번호 입력"
              value="번호 입력"
              type="text"
              maxLength={6}
              customStyle={css`
                width: 50%;
              `}
            />
            <p>-</p>
            <InputForm
              placeholder="번호 입력"
              value="번호 입력"
              type="text"
              maxLength={1}
              customStyle={css`
                width: 60px;
              `}
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
            value="이름"
            descriptionTop={'이름'}
            type="text"
          />
        </div>
        <div className="item">
          <InputForm
            placeholder="통신사"
            value={selectedAgency}
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
            value="번호 입력"
            descriptionTop={'휴대폰 번호'}
            type="text"
          />
        </div>
      </div>
      <Fragment>
        <FilterModal
          isOpen={isModalOpen}
          title="통신사를 선택해 주세요"
          options={agencyRanges}
          selectedOptions={selectedAgency}
          onClose={() => setIsModalOpen(false)}
          onOptionSelect={handleAgencySelect}
          onReset={resetAgencyOptions}
        />
      </Fragment>
      <div className="bottom">
        <button className={'confirm_button'}>다음</button>
      </div>
    </SignupWrapper>
  );
}
