'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import Button from '@/app/_component/atom/button/button';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import { checkParamsFilled } from '@/hooks/useUtil';

export default function Verification(): React.JSX.Element {
  const [password, setPassword] = React.useState(''); //현재 입력된 숫자
  const router = useRouter();
  const handleNextButtonClick = () => {
    if (password.length >= 5) {
      router.push('/login/verification');

      // @Todo 여기에 api 호출
    }
  };
  const onClickRefresh = () => {};
  return (
    <VerificationWrap>
      <BackHeader title={'아이디/비밀번호 찾기'} url={''} />
      <div className="top">보안문자를 입력해주세요</div>
      <div className="captcha_img">
        <Image
          src="data:image/png;base64,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"
          alt={'보안이미지'}
          width={353}
          height={140}
        />
      </div>
      <div className="refresh"></div>
      <div className="wrap">
        <VerificationInput
          inputLength={5}
          password={password}
          setPassword={setPassword}
        />
      </div>
      <BottomButton
        filled={password !== ''}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
