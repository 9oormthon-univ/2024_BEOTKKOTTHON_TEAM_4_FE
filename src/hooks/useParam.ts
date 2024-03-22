'use client';

// export const
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
/**
  @definition
  searchParams 값을 가져와서
  Params 에 세팅하고,
  onChangeValue 를 통해 그 param 값도 변경이 가능
 **/

export function useQueryParams() {
  const [queryparams, setQueryparams] = useState<ParamsType>({});

  useEffect(() => {
    let searchParams;
    if (typeof window !== 'undefined') {
      searchParams = require('next/navigation').useSearchParams();
      const newParams = Object.fromEntries(searchParams);
      setQueryparams(newParams);
    }
  }, []);
  const onChangeValue: OnChangeValueType = (field, value) => {
    setQueryparams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return { queryparams, onChangeValue };
}
