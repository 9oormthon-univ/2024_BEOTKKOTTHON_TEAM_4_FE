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
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [params, setParams] = useState<ParamsType>({});

  useEffect(() => {
    const newParams = Object.fromEntries(searchParams);
    setParams(newParams);
  }, [searchParams]);
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  return { params, onChangeValue };
}
