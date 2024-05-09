'use client';

import * as React from 'react';
import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useEffect, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { useRouter } from 'next/navigation';
import { postSMSCode } from '@/app/_lib/postSMSCode';
import { LocalStorage, SecureLocalStorage } from '@/hooks/useUtil';
import { OnChangeValueType } from '@/types/globalType';
import { postFindChallenge } from '@/app/_lib/postFindChallenge';
import WarningToast from '@/app/_component/atom/WarningToast';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';

export default function Verification(): React.JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [errormessage, setErrormessage] = useState(''); // 로딩 상태 추가

  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

  const handleNextButtonClick = async () => {
    if (password.length >= 5) {
      try {
        const response = await postFindChallenge(password, 'SMS');
        const { success, code, data, message } = response;
        if (success) {
          LocalStorage.setItem('type', 'loginEnd');
          SecureLocalStorage.setItem('id', response.data.userId);
          router.push(`/signup/done`);
        } else {
          // 코드에프에러(CODEF_ERROR)
          if (code === 'CODEF_ERROR') {
            setPassword('');
            setErrormessage(data.message);
          }
          //잘못 입력시(RETRY_SMS), 인증절차 다시 시도(CHALLENGE_NOT_FOUND)
          setPassword('');
          setErrormessage(message);
        }
      } catch (error) {
        console.error('sms 실패:', error);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
      router.push('/signup/info');
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const onChangeValue: OnChangeValueType = (value: number | string) => {
    setPassword(value);
  };

  return (
    <VerificationWrap>
      <BackHeader title={'아이디/비밀번호 찾기'} url={'/login/find'} />
      <div className="top">
        문자로 전송받은 <br />
        인증번호 6자리를 입력해 주세요.
        <div className="time_count">
          남은 시간
          <div>
            {minutes}:{second}
          </div>
        </div>
      </div>
      <div className="wrap">
        <VerificationInput
          inputLength={6}
          password={password}
          onChangeValue={onChangeValue}
        />
      </div>
      <WarningToastWrap errorMessage={errormessage} />
      <BottomButton
        filled={password.length >= 6}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
