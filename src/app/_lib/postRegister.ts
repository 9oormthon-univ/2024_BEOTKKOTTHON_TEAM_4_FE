import { apiUrl } from '@/hooks/api';
import { mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function postRegister(params) {
  const { id, password, identity_first, identity_last } = params;

  const api_params = JSON.stringify({
    id: id,
    password: password,
    identity: identity_first + '-' + identity_last,
  });

  console.log(api_params);

  // const accessToken = localStorage.getItem('accessToken');
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0N2FmZmJkOC1hNDY1LTQyNjUtYjE3My1kZDk2YWM2MjNhYWQiLCJpYXQiOjE3MTExMDY5MjEsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MTExMTU5MjF9.iUT9el2vJWvsMKpW_uNKvlLBTqhK-OUaYGE3rUDkX7w';

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

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData = await res.json();
    if (responseData.success) {
      return 'true';
    } else return responseData.message;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
