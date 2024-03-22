'use client';
import * as React from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import TermsDetail from '@/app/_component/molecule/TermsDetail';
import { Suspense, useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';

export default function Terms(): React.JSX.Element {
  const router = useRouter();
  const [params, setParams] = useState<ParamsType>({
    nickname: '',
  });
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleClick = () => {
    router.push('/signup/info');
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JoinWrap>
        <BackHeader title={' '} url={'/signup'} />
        <JoinTemplate
          title={'예방접종도우미의'}
          useterm={true}
          subTop={'회원약관에 동의해야 정상적으로 서비스를 이용할 수 있어요.'}
          trueLabel={'네, 모두 동의합니다.'}
          params={params}
          field={'terms'}
          onChangeValue={onChangeValue}
        />
        <div className="detail">
          <TermsDetail
            title={'예방접종 도우미 이용약관'}
            content={
              '백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 '
            }
            status={params.terms}
          />
          <TermsDetail
            title={'예방접종 도우미 이용약관'}
            content={
              '백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 '
            }
            status={params.terms}
          />
        </div>
        <BottomButton
          filled={params.terms === true}
          handleNextButtonClick={handleClick}
        />
      </JoinWrap>
    </Suspense>
  );
}
