'use client';

import * as React from 'react';
import { JoinWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';

export default function Join(): React.JSX.Element {
  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} />
      <JoinTemplate
        title={'예방접종도우미에 가입한 적이 있나요?'}
        subTop={'백곰을 이용하기 위해서는'}
        subBottom={'질병관리청의 예빵접종도우미 가입이 필요해요.'}
        falseLabel={'아니요, 가입한 적이 없어요'}
        trueLabel={'네, 가입한 적이 있어요'}
        field={'signupState'}
      />
    </JoinWrap>
  );
}
