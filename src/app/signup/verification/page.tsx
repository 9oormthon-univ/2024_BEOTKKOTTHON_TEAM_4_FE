'use client';

import * as React from 'react';
import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';

export default function Verification(): React.JSX.Element {
  return (
    <VerificationWrap>
      <div className="top">
        문자로 전송받은 <br />
        인증번호 6자리를 입력해 주세요.
        <div className="time_count">남은 시간 </div>
      </div>
      <div className="wrap">
        <VerificationInput />
        <div className="not">문자가 오지 않아요</div>
      </div>
    </VerificationWrap>
  );
}
