export const obfuscateCreditCard = (value: string) => {
  const withoutSpaces = value?.replace(/\s/g, '');
  const lastFour = withoutSpaces?.slice(-4);
  const remaining = withoutSpaces?.slice(0, withoutSpaces?.length - 4);

  const masked = '•'.repeat(remaining?.length) + lastFour;

  return masked?.match(/.{1,4}/g)?.join(' ');
};
