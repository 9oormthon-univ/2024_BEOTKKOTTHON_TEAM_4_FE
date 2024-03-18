'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import Button from '@/app/_component/atom/button/button';
import { Colors, Icons, Images } from '@globalStyles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';

export default function Signup(): React.JSX.Element {
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
            value="통신사"
            descriptionTop={'통신사'}
            rightIcon={Icons.arrow_down}
            type="text"
            customStyle={css`
              & > .input__content > .input__content--right__icon > img {
                width: 24px;
                height: 24px;
              }
            `}
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
      <div className="bottom">
        <button className={'confirm_button'}>다음</button>
      </div>
    </SignupWrapper>
  );
}
