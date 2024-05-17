import { apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';

/** 비
 * 밀번호 전송
 * @param params
 */
export async function postRegister(params) {
  const { id, password, identity_first, identity_last } = params;
  const identity = parseIdentity(identity_first + identity_last);

  const api_params = JSON.stringify({
    id: id,
    password: password,
    rnn: identity_first + identity_last,
  });

  console.log(api_params);

  const accessToken = LocalStorage.getItem('accessToken');

  try {
    const res = await fetch(`${apiUrl}/register-rnn`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: api_params,
      cache: 'no-store',
    });

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    return error;
  }
}
