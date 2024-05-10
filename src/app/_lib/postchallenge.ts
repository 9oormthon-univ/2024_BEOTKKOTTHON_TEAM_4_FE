import { apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';
import { RequestOptions } from '@/types/globalType';

export async function postchallenge(password: string) {
  const accessToken = LocalStorage.getItem('accessToken');

  const requestOptions: RequestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: password,
      type: 'SECURE_NO',
    }),
    cache: 'no-store',
  };

  try {
    const res = await fetch(`${apiUrl}/signup/challenge`, requestOptions);

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    return error;
  }
}
