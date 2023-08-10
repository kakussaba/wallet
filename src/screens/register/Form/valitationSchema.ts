import * as yup from 'yup';

export const yupValidationSchema = {
  number: yup.string().min(16).required(),
  name: yup.string().max(50).required(),
  expiration: yup.string().min(4).required(),
  cvv: yup.string().min(3).required(),
};
