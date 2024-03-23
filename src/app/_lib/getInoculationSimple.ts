import { apiDevUrl, apiUrl } from '@/hooks/api';
import { LocalStorage, mapTelecom, parseIdentity } from '@/hooks/useUtil';
import { useEffect } from 'react';

export async function getInoculationSimple(type) {
  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiDevUrl}/inoculation/simple?type=${type}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
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
