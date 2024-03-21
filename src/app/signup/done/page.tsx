'use client';

import * as React from 'react';
import { SignupDoneWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useEffect, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { router } from 'next/navigation';
import DonePage from '@/app/_component/temp/DonePage';

export default function SignupDone(): React.JSX.Element {
  return (
    <SignupDoneWrap>
      <BackHeader title={''} url={'/signup'} />
      <div className="padding">
        <DonePage
          title={'예방접종도우미 가입 완료!'}
          content_top={'서비스 이용을 위해 전예나님의 정보를 입력해 주세요'}
          content_bottom={'전예나님에게 꼭 맞는 백신을 추천해 드릴게요!'}
        />
      </div>
    </SignupDoneWrap>
  );
}
