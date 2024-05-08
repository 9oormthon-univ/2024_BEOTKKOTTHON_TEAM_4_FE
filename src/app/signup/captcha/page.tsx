'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//style
import { VerificationWrap } from './style';
import { Images } from '@/styles';
//component
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';
//lib
import { postchallenge } from '@/app/_lib/postchallenge';

import { LocalStorage } from '@/hooks/useUtil';
//type
import { OnChangeValueType } from '@/types/globalType';

export default function Captcha(): React.JSX.Element {
  const [password, setPassword] = useState<string>(''); //현재 입력된 숫자
  const router = useRouter();
  const [secureNoImage, setSecureNoImage] = useState<string | null>(null); // 상태 추가
  const [errormessage, setErrormessage] = useState(''); // 로딩 상태 추가

  useEffect(() => {
    setSecureNoImage(LocalStorage.getItem('secureNoImage'));
  }, []);

  const handleNextButtonClick = async () => {
    if (password && password.length >= 5) {
      try {
        const response = await postchallenge(password);
        const { success, message, data, code } = response;
        if (success) {
          router.push(`/signup/verification`);
        } else {
          setPassword('');
          setErrormessage(message);
          // 잘못 입력시
          if (code === 'RETRY_SECURE_NO') {
            setSecureNoImage(data.secureNoImage);
          }
          // codef 응답시간 초과 에러
          if (code === 'CODEF_ERROR') {
            setErrormessage(data.message);
          }
        }
      } catch (error) {
        console.error('Signup failed:', error.message);
      }
    }
  };

  const onChangeValue: OnChangeValueType = (value: any) => {
    setPassword(value);
  };

  return (
    <VerificationWrap>
      <BackHeader title={'예방접종도우미 회원가입'} url={'/signup/more'} />
      <div className="top">보안문자를 입력해주세요</div>
      <div className="captcha_img">
        <Image
          src={secureNoImage ? secureNoImage : Images.vacgom}
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
          onChangeValue={onChangeValue}
        />
      </div>
      <WarningToastWrap errorMessage={errormessage} />

      <BottomButton
        filled={password !== ''}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
