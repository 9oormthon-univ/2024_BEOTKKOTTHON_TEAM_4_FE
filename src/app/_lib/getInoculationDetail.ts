import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function getInoculationDetail(type: string, name: string) {
  const api_params = JSON.stringify({
    name: name,
  });

  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiDevUrl}/inoculation/detail?type=${type}`, {
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
