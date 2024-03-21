'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';
import { OnChangeValueType } from '@/types/globalType';
import * as queryString from 'querystring';
import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import { fetchAccessToken } from '@/hooks/useKakaoLogin';

export default function Join(): React.JSX.Element {
  const router = useRouter();
  const { params, onChangeValue } = useQueryParams();

  const handleClick = () => {
    router.push(`/moreinfo/med`);
  };

  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const queryCode = new URL(window.location.href).searchParams.get('code');
    if (queryCode) {
      setCode(queryCode);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        const response = await fetchAccessToken(code);
        console.log(response);
        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
        }
      }
    };
    fetchData();
  }, [code]);

  return (
    <JoinWrap>
      <BackHeader title={' '} url={'/'} />
      <JoinTemplate
        title={'임신 중이신가요?'}
        subTop={'임신 중에 꼭 필요한 백신과 '}
        subBottom={'금기해야 할 백신을 알려드릴게요'}
        falseLabel={'임신 중이 아니에요'}
        trueLabel={'임신 중이에요'}
        params={params}
        field={'preYn'}
        onChangeValue={onChangeValue}
      />
      <BottomButton
        filled={params.signupState === false}
        handleNextButtonClick={() => {
          handleClick();
        }}
      />
    </JoinWrap>
  );
}
