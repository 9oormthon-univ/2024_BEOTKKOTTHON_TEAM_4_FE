import { LocalStorage } from '@/hooks/useUtil';

const apiDevUrl = 'https://api-dev.vacgom.co.kr/api/v1';

export const postHealthCondition = async (healthProfiles) => {
  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const response = await fetch(`${apiDevUrl}/me/healthCondition`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ healthProfiles }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${errorData.message}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error posting health condition:', error);
    throw error;
  }
};
