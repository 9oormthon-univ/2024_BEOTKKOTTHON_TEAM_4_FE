import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';
import { useEffect } from 'react';

export async function getInoculationSimple(type: string, disease: string[]) {
  const accessToken = LocalStorage.getItem('accessToken');
  const api_params = JSON.stringify({
    type: type,
    vaccinations: disease[0] === '전체' ? [] : disease,
  });

  console.log(api_params);

  try {
    const res = await fetch(`${apiDevUrl}/inoculation/simple`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: api_params,
    });

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
