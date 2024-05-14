import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';
import { useEffect } from 'react';

export async function getCertificate() {
  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiDevUrl}/inoculation/certificate`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
