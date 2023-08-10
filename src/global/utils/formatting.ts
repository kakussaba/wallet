export const obfuscateCreditCard = (value: string) => {
  const withoutSpaces = value?.replace(/\s/g, '');
  const lastFour = withoutSpaces?.slice(-4);
  const remaining = withoutSpaces?.slice(0, withoutSpaces?.length - 4);

  const masked = '•'.repeat(remaining?.length) + lastFour;

  return masked?.match(/.{1,4}/g)?.join(' ');
};

export const maskNumber = (value: string) => {
  return value.replace(/\D+/g, '');
};

export const maskCardNumber = (value: string) => {
  if (value.length === 16) {
    return maskNumber(value).match(new RegExp('.{1,4}', 'g')).join(' ');
  }

  return maskNumber(value);
};

export const maskDate = (value: string) => {
  if (value.length === 4) {
    return maskNumber(value).match(new RegExp('.{1,2}', 'g')).join('/');
  }

  return maskNumber(value);
};
