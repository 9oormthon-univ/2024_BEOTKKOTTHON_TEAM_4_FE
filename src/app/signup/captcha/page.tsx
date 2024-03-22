'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useLocation } from 'react-router-dom';

import { VerificationWrap } from './style';
import Image from 'next/image';

import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';

export default function Captcha(): React.JSX.Element {
  const [password, setPassword] = React.useState(''); //현재 입력된 숫자
  const router = useRouter();
  console.log(router);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get('secureNoImage');

  console.log(queryParamValue);

  const handleNextButtonClick = () => {
    if (password.length >= 5) {
      router.push('/signup/verification');

      // @Todo 여기에 api 호출
    }
  };
  const onClickRefresh = () => {};

  return (
    <VerificationWrap>
      <BackHeader title={'예방접종도우미 회원가입'} url={'/signup/more'} />
      <div className="top">보안문자를 입력해주세요</div>
      <div className="captcha_img">
        <Image
          src={queryParamValue}
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
