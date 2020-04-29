import * as Yup from 'yup';

const emailValidation = {
  email: Yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
};

const passwordValidation = {
  password: Yup
    .string()
    .required('Password is required'),
};

const confirmPasswordValidation = {
  password: Yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Password must match'),
};

const signupValidation = Yup.object({
  name: Yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is required'),
  ...emailValidation,
  ...confirmPasswordValidation
});

const loginValidation = Yup.object({
  ...emailValidation,
  ...passwordValidation
});

const forgotPasswordValidation = Yup.object({
  ...emailValidation,
});

export default {
  signupValidation,
  loginValidation,
  forgotPasswordValidation,
};
