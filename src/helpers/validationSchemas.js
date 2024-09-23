import * as yup from 'yup';

export const registrationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, 'At least 3 characters')
    .max(60, 'Not more than 60 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
});
