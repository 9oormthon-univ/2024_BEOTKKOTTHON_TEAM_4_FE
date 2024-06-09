import { LocalStorage } from '@/hooks/useUtil';

const apiDevUrl = 'https://api-dev.vacgom.co.kr/api/v1';

export const getUserDetails = async () => {
  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const response = await fetch(`${apiDevUrl}/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
