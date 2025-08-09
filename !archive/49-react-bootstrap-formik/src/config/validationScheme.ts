import { object, ref, string } from 'yup'

export const validationSchema = object({
  username: string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(35, 'Username must be less than 35 characters long'),
  password: string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long')
    .max(15, 'Password must be less than 15 characters long'),
  confirmPassword: string()
    .required('Confirm password is required')
    .oneOf([ref('password')], 'Passwords must match'),
  email: string().email('Invalid email').required('Email is required')
})
