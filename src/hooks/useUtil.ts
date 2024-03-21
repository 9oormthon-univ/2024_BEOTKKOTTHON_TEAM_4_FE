import * as React from 'react';
import { ParamsType } from '@/types/globalType';

type UserIdentity = { date: string; sex: string };

/**
 * @define 주민번호 앞자리를 인식하여 20-년생인지 19-년생인지 반환
 * @param identityString : 주민번호
 */
export function parseIdentity(identityString: string): UserIdentity {
  const birth = identityString.slice(0, 6);
  const sexIdentityNo = identityString[7];
  const is90s = sexIdentityNo === '1' || sexIdentityNo === '2';

  return {
    date: is90s ? `19${birth}` : `20${birth}`,
    sex: sexIdentityNo === '1' || sexIdentityNo === '3' ? 'M' : 'F',
  };
}

/**
 * @define 인풋값의 숫자 외의 값들을 지움.
 * @param e
 */
export const filterNumericInput = (
  e: React.ChangeEvent<HTMLInputElement>,
): string => {
  return e.target.value.replace(/\D/g, ''); // 숫자가 아닌 문자를 필터링하여 제거
};

/**
 * @define param 값이 모두 value 를 갖는지 체크하는 함수
 * @param params
 */
export function checkParamsFilled(params: ParamsType): boolean {
  for (const key in params) {
    if (!params[key as keyof ParamsType]) {
      return false;
    }
  }
  return true;
}

/**
 * @define 모든 컨디션이 ture 라면 통과, 하나라도 false 이거나 default 이면 불통
 * @param params
 */
export const isAllConditionsTrue = (params: ParamsType): boolean => {
  for (const key in params) {
    const conditions = params[key];
    for (const conditionKey in conditions) {
      if (conditions[conditionKey] !== 'true') {
        return false;
      }
    }
  }
  return true;
};
