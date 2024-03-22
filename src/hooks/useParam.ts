'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { OnChangeValueType, ParamsType } from '@/types/globalType';

export function useQueryParams() {
  const [queryparams, setQueryparams] = useState<ParamsType>({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && searchParams) {
      const entries = searchParams ? Array.from(searchParams.entries()) : [];
      const newParams = Object.fromEntries(entries);
      setQueryparams(newParams);
    }
  }, [searchParams]);

  const onChangeValue: OnChangeValueType = (field, value) => {
    setQueryparams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return { queryparams, onChangeValue };
}
