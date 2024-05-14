import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';
import { useEffect } from 'react';
import { nationDiseaseMatch } from '@/constants';

export async function getInoculationSimple(type: string, disease: string[]) {
  const accessToken = LocalStorage.getItem('accessToken');
  let UpdatedDisease: string[] = [];
  if (disease[0] === '전체') {
    UpdatedDisease = [];
  } else {
    UpdatedDisease = disease.map((item) => nationDiseaseMatch[item]);
  }
  console.log('UpdatedDisease', UpdatedDisease);

  const api_params = JSON.stringify({
    type: type,
    vaccinations: UpdatedDisease || [],
  });

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
