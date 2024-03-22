'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { VerificationWrap } from './style';
import Image from 'next/image';

import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { postSignup } from '@/app/_lib/postSignup';
import { postchallenge } from '@/app/_lib/postchallenge';
import { LocalStorage } from '@/hooks/useUtil';

export default function Captcha(): React.JSX.Element {
  const [password, setPassword] = React.useState(''); //현재 입력된 숫자
  const router = useRouter();
  let secureNoImage = LocalStorage.getItem('secureNoImage');

  const handleNextButtonClick = async () => {
    if (password.length >= 5) {
      router.push('/signup/verification');
      try {
        const response = await postchallenge(password);
        console.log('Signup successful:', response);
        router.push(`/signup/verification`);
      } catch (error) {
        console.error('Signup failed:', error.message);
      }
    }
  };
  const onClickRefresh = () => {};

  return (
    <VerificationWrap>
      <BackHeader title={'예방접종도우미 회원가입'} url={'/signup/more'} />
      <div className="top">보안문자를 입력해주세요</div>
      <div className="captcha_img">
        <Image
          src={secureNoImage}
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
