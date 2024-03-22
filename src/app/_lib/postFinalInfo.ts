import { apiDevUrl } from '@/hooks/api';
import { mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function postFinalInfo(userData) {
  const api_params = JSON.stringify({
    memberInfo: { userData },
    vaccinationInfo: {
      name: '',
      birth: '',
      sex: '',
      vaccineList: [],
    },
  });

  console.log(api_params);

  const accessToken = localStorage.getItem('accessToken');
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

    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
