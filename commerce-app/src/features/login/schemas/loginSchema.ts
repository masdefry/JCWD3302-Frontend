import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password have minimum 8 characters')
    .max(25, 'Password have maximum 25 characters')
    .required('Password is required'),
});
