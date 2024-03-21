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
import { router } from 'next/navigation';

export default function Verification(): React.JSX.Element {
  const [password, setPassword] = useState('');
  const handleNextButtonClick = () => {
    if (password.length >= 5) {
      router.push('/signup/verification');

      // @Todo 여기에 api 호출
    }
  };
  const MINUTES_IN_MS = 3 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');
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
          setPassword={setPassword}
        />
      </div>
      <BottomButton
        filled={password.length >= 6}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
