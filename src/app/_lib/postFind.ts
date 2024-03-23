import { apiUrl } from '@/hooks/api';
import {
  LocalStorage,
  mapTelecom,
  parseIdentity,
  SecureLocalStorage,
} from '@/hooks/useUtil';

export async function postFind(userData) {
  console.log(userData);

  let userName = SecureLocalStorage.getItem('userName');
  let identity_first = SecureLocalStorage.getItem('identity_first');
  let identity_last = SecureLocalStorage.getItem('identity_last');
  let telecom = SecureLocalStorage.getItem('telecom');
  let phoneNumber = SecureLocalStorage.getItem('phoneNumber');

  const update_identity = parseIdentity(identity_first);
  const mappedTelecom = mapTelecom(telecom);

  const api_params = JSON.stringify({
    userName: userName,
    identity: update_identity.date + identity_last,
    newPassword: userData.password,
    telecom: mappedTelecom,
    phoneNumber: phoneNumber,
  });

  console.log(api_params);

  const accessToken = LocalStorage.getItem('accessToken');
  try {
    const res = await fetch(`${apiUrl}/reset-password`, {
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

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
