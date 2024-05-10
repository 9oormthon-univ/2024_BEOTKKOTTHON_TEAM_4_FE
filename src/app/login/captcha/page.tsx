'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import { postchallenge } from '@/app/_lib/postchallenge';
import { postFindChallenge } from '@/app/_lib/postFindChallenge';
import { checkParamsFilled, LocalStorage } from '@/hooks/useUtil';
import { Images } from '@/styles';
import { useEffect, useState } from 'react';
import WarningToastWrap from '@/app/_component/molecule/WorningToastWrap';

export default function Verification(): React.JSX.Element {
  const [password, setPassword] = React.useState(''); //현재 입력된 숫자
  const router = useRouter();
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [secureNoImage, setSecureNoImage] = useState<string | null>(null); // 상태 추가
  const [errormessage, setErrormessage] = useState(''); // 로딩 상태 추가

  useEffect(() => {
    setSecureNoImage(LocalStorage.getItem('secureNoImage'));
  }, []);

  const handleNextButtonClick = async () => {
    if (password && password.length >= 5) {
      try {
        setLoading(true); // 로딩 시작
        const response = await postFindChallenge(password, 'SECURE_NO');
        const { success, message, data, code } = response;
        console.log(response);
        if (success) {
          router.push('/login/verification');
        } else {
          setPassword('');
          setErrormessage(message);
          // 잘못 입력시
          if (code === 'RETRY_SECURE_NO') {
            setSecureNoImage(data.secureNoImage);
          }
          // codef 에러
          if (code === 'CODEF_ERROR') {
            setErrormessage(data.message);
          }
        }
      } catch (error) {
        console.error('Signup failed:', error);
      } finally {
        setLoading(false); // 로딩 종료
      }
    }
  };
  const onChangeValue: OnChangeValueType = (value: number | string) => {
    setPassword(value);
  };

  return (
    <VerificationWrap>
      <BackHeader title={'아이디/비밀번호 찾기'} url={'/login/find'} />
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
      {!loading && ( // 로딩 중이 아닐 때에만 렌더링
        <BottomButton
          filled={password !== ''}
          handleNextButtonClick={handleNextButtonClick}
        />
      )}
    </VerificationWrap>
  );
}
