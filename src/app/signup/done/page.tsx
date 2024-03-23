'use client';

import * as React from 'react';
import { SignupDoneWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, Suspense, useEffect, useState } from 'react';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import DonePage from '@/app/_component/temp/DonePage';
import Button from '@/app/_component/atom/button/button';
import Link from 'next/link';
import { useQueryParams } from '@/hooks/useParam';
import { OnChangeValueType, ParamsType } from '@/types/globalType';

export default function SignupDone(): React.JSX.Element {
  const router = useRouter();
  const [alreadyUser, setAlreadyUser] = useState(true);
  // 예방접종도우미 가입한 이력이 있으면 helpalready
  // 예방접종도우미 최초 가입이면 helpnew
  // 조회완료면 submit
  // 로그인 완
  const [params, setParams] = useState<ParamsType>({
    type: '',
  });

  useEffect(() => {
    let type = localStorage.getItem('type');
    setParams({ type: type });
  }, []);

  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return (
    <SignupDoneWrap>
      {params.type === 'helpalready' ? (
        <div className="padding">
          <DonePage
            more={alreadyUser}
            title={`예방접종도우미에`}
            title_bottom={'가입한 이력이 있어요!'}
            content_top={'서비스 이용을 위해 전예나님의 정보를 입력해 주세요'}
            content_bottom={'회원님과 꼭 맞는 백신을 추천해 드릴게요!'}
          />
          <Button
            label={'예방접종도우미 로그인하기'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push('/login/helper');
            }}
          />
          <Link href={'/login/find'} className={'password'}>
            비밀번호가 기억나지 않아요
          </Link>
        </div>
      ) : params.type === 'helpnew' ? (
        <div className="padding">
          <DonePage
            title={'예방접종도우미 가입 완료!'}
            content_top={'서비스 이용을 위해 전예나님의 정보를 입력해 주세요'}
            content_bottom={'회원님과 꼭 맞는 백신을 추천해 드릴게요!'}
          />
          <Button
            label={'내 정보 입력하기'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push('/signup/moreidentity');
            }}
          />
        </div>
      ) : params.type === 'submit' ? (
        <div className="padding">
          <DonePage
            title={'접종 내역 조회 완료!'}
            content_top={'회원님의 백신을 확인해 보세요'}
          />
          <Button
            label={'시작하기'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push('/moreinfo/dis');
            }}
          />
        </div>
      ) : (
        <div className="padding">
          <DonePage
            title={'예방접종도우미 로그인 완료!'}
            content_top={'서비스 이용을 위해 회원님의 정보를 입력해 주세요'}
            content_bottom={'회원님과 꼭 맞는 백신을 추천해 드릴게요!'}
          />
          <Button
            label={'시작하기'}
            size={'large'}
            customStyle={css`
              width: 100%;
            `}
            onClick={() => {
              router.push('/signup/moreidentity');
            }}
          />
        </div>
      )}
    </SignupDoneWrap>
  );
}
