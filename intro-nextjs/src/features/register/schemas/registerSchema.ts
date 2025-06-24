import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(10, 'Username have minimum 10 characters')
    .max(25, 'Username have maximum 25 characters'),
  email: yup
    .string()
    .email('Email format is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .max(25, 'Password have maximum 25 characters'),
  role: yup.string().required('Role is required'),
});
