'use client';
import * as React from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';

import { useRouter } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import { Suspense, useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import { LocalStorage } from '@/hooks/useUtil';
import { PATH } from '@/routes/path';

export default function Join(): React.JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    LocalStorage.setItem('ORGAN_TRANSPLANTATION', params.transYn);
    router.push(PATH.MOREINFO_ID);
  };
  const [params, setParams] = useState<ParamsType>({
    medYn: '',
  });
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JoinWrap>
        <BackHeader title={' '} url={PATH.MOREINFO_MED} counter={4} />
        <JoinTemplate
          title={'의료기관 종사자이신가요?'}
          subTop={'의료기관 종사자에게 '}
          subBottom={'꼭 필요한 백신을 알려드릴게요'}
          falseLabel={'의료기관 종사자가 아니에요'}
          trueLabel={'의료기관 종사자에요'}
          params={params}
          field={'medYn'}
          onChangeValue={onChangeValue}
        />
        <BottomButton
          filled={params.medYn !== ''}
          handleNextButtonClick={() => {
            handleClick();
          }}
        />
      </JoinWrap>
    </Suspense>
  );
}
