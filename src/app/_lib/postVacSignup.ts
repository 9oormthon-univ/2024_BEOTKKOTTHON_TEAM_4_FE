import { apiDevUrl } from '@/hooks/api';
import { LocalStorage } from '@/hooks/useUtil';

export async function postVacSignup(memberInfo) {
  const vaccineList = LocalStorage.getItem('vaccineList');
  const vaccinationInfo = JSON.parse(vaccineList);
  const api_params = JSON.stringify({
    memberInfo,
    vaccinationInfo,
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

    // if (res.status) {
    //   router.push('/moreinfo/welcome');
    // } else {
    //   router.push('/signup');
    // }

    const responseData = await res.json();
    LocalStorage.setItem('accessToken', responseData.token.accessToken);
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
