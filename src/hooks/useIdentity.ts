type UserIdentity = { date: string; sex: string };
export function parseIdentity(identityString: string): UserIdentity {
  const birth = identityString.slice(0, 6);
  const sexIdentityNo = identityString[7];
  const is90s = sexIdentityNo === '1' || sexIdentityNo === '2';

  return {
    date: is90s ? `19${birth}` : `20${birth}`,
    sex: sexIdentityNo === '1' || sexIdentityNo === '3' ? 'M' : 'F',
  };
}
