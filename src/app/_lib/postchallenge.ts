import { apiUrl } from '@/hooks/api';
import { mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function postchallenge(params) {
  const { code } = params;

  const api_params = JSON.stringify({
    code: code,
    type: 'SECURE_NO',
  });

  console.log(api_params);

  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0N2FmZmJkOC1hNDY1LTQyNjUtYjE3My1kZDk2YWM2MjNhYWQiLCJpYXQiOjE3MTExMDY5MjEsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MTExMTU5MjF9.iUT9el2vJWvsMKpW_uNKvlLBTqhK-OUaYGE3rUDkX7w';

  try {
    const res = await fetch(`${apiUrl}/signup/challenge`, {
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
    if (res) {
      const responseData = await res.json();

      return responseData;
    }
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
