'use client';

import * as React from 'react';
import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, useEffect, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { useRouter } from 'next/navigation';
import { postchallenge } from '@/app/_lib/postchallenge';
import { postSMSCode } from '@/app/_lib/postSMSCode';
import { LocalStorage } from '@/hooks/useUtil';
import { OnChangeValueType } from '@/types/globalType';

export default function Verification(): React.JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState('');

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
        const response = await postSMSCode(password);
        console.log('sms 인증 성공:', response);
        if (response.success) {
          LocalStorage.setItem('type', 'helpnew');
          router.push(`/signup/done`);
        } else {
          LocalStorage.setItem('type', 'helpalready');
          router.push(`/signup/done`);
        }
      } catch (error) {
        console.error('sms 실패:', error.message);
        console.error('sms 성공여부', error.success);
        if (error.message === 'USER_ALREADY_REGISTERED') {
          LocalStorage.setItem('type', 'helpalready');
          router.push(`/signup/done`);
        }
      }
      // api 호출 했는데 이미 가입한 계정이면 /signup/done?type=helpalready
      // api 호출 했는데 신규 가입이면 /signup/done?type=helpnew
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
      <BackHeader title={'본인인증'} url={'/signup'} />
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
      <BottomButton
        filled={password.length >= 6}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
