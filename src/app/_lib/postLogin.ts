import { apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';

/**
 * 로그인과 데이터 조회
 * @param props
 */
export async function postLogin(props) {
  const { id, password } = props;

  const api_params = JSON.stringify({
    id: id,
    password: password,
  });

  console.log(api_params);
  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiUrl}/vaccination`, {
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
