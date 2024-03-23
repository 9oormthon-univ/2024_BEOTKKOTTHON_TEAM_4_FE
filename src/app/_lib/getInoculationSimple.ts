import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function getInoculationSimple(type) {
  const api_params = JSON.stringify({});

  console.log(api_params);

  // const accessToken = LocalStorage.getItem('accessToken');
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNDkxOGUwOC05YzcxLTQxNWUtOWIxMC00ZmQyNWYxMDRkNzEiLCJpYXQiOjE3MTExNjE3NDUsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MTExNzA3NDV9.hwZPEy91J-vRyQ2Pxhu5U-pS_721BJbqs3Wz3onVom0';
  try {
    const res = await fetch(`${apiDevUrl}/inoculation/simple?type=${type}`, {
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
