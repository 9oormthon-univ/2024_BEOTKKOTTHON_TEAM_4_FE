import * as React from 'react';
import { ParamsType } from '@/types/globalType';
import secureLocalStorage from 'react-secure-storage';
import jwt from 'jsonwebtoken';
import { PATH } from '@/routes/path';
import { useRouter as useNavigation } from 'next/navigation';
import { useRouter as useRouter } from 'next/router';

type UserIdentity = { date: string; sex: string };

/**
 * @define 주민번호 앞자리를 인식하여 20-년생인지 19-년생인지 반환
 * @param identityString : 주민번호
 */
export function parseIdentity(identityString: string): UserIdentity {
  const birth = identityString.slice(0, 6);
  const sexIdentityNo = identityString[6];
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

/**
 *  로컬 스토리지에서 저장된 값 가져오기
 * @param key
 */
const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key) || '';
};

/**
 * 통신사 param 값을 변환해주는 함수
 * @param telecom
 */
export function mapTelecom(telecom) {
  switch (telecom) {
    case 'SKT 알뜰폰':
      return 'SKT_MVNO';
    case 'KT 알뜰폰':
      return 'KT_MVNO';
    case 'LG U+ 알뜰폰':
      return 'LG_MVNO';
    case 'LG U+':
      return 'LG';
    default:
      return telecom;
  }
}

/**
 * LocalStorage
 */
export class LocalStorage {
  constructor() {}

  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
/**
 * LocalStorage
 */
export class SecureLocalStorage {
  constructor() {}

  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      secureLocalStorage.setItem(key, value);
    }
  }

  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return secureLocalStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== 'undefined') {
      secureLocalStorage.removeItem(key);
    }
  }
}

/**
 * @define
 */

export const AccessTokenRouter = (router) => {
  const accessToken = LocalStorage.getItem('accessToken');
  const decode = jwt.decode(accessToken);
  const goToHome = () => {
    if (decode?.role === 'ROLE_USER') {
      // 완전가입
      router.push(PATH.HOME);
    }
  };
  const goToRoot = () => {
    if (decode?.role === 'ROLE_TEMP_USER') {
      // 카카오 로그인까지 한 유저
      router.push(PATH.SIGNUP);
    } else if (decode?.role !== 'ROLE_USER') {
      router.push(PATH.root);
    } else if (accessToken === null) {
      router.push(PATH.root);
    }
  };
  return { decode, goToHome, goToRoot };
};
