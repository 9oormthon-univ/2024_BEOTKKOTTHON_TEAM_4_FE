import { apiDevUrl } from '@/hooks/api';
import {
  LocalStorage,
  mapTelecom,
  parseIdentity,
  SecureLocalStorage,
} from '@/hooks/useUtil';

export async function postVacSignup(userData) {
  const vaccineList = SecureLocalStorage.getItem('vaccineList');
  const vaccinationInfo = JSON.parse(vaccineList);
  console.log(vaccinationInfo);
  const api_params = JSON.stringify({
    memberInfo: { userData },
    vaccinationInfo: { vaccinationInfo },
  });

  console.log(api_params);

  const accessToken = LocalStorage.getItem('accessToken');

  try {
    const res = await fetch(`${apiDevUrl}/member/signup`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: api_params,
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData = await res.json();
    LocalStorage.setItem('accessToken', responseData.token.accessToken);
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
