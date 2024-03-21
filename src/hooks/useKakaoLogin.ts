import { ParamsType } from '@/types/globalType';

type fetchTokenType = { data: ParamsType; accessToken: string };

export async function fetchAccessToken(code: string): Promise<fetchTokenType> {
  try {
    const response = await fetch(
      `https://api-dev.vacgom.co.kr/api/v1/oauth/kakao/login?code=${code}`,
    );
    if (response.ok) {
      const data = await response.json();
      return { data: data, accessToken: data.token.accessToken };
    } else {
      console.error('Failed to fetch data:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
