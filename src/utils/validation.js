import * as Yup from 'yup'

// Common
const emailValidation = {
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required')
}

const nameValidation = {
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is required')
}

const desValidation = {
  description: Yup.string().max(
    1000,
    'Description must be less than or equal to 1000 characters'
  )
}

const passwordValidation = {
  password: Yup.string().required('Password is required')
}

const confirmPasswordValidation = {
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Password must match')
}

const templateFields = {
  fields: Yup.array()
    .of(
      Yup.object().shape({
        label: Yup.string()
          .min(4, 'too short')
          .required('Label is required')
      })
    )
    .required('Must have fields')
    .min(3, 'Minimum of 3 fields')
}

// Forms
const signupValidation = Yup.object({
  ...nameValidation,
  ...emailValidation,
  ...confirmPasswordValidation
})

const loginValidation = Yup.object({
  ...emailValidation,
  ...passwordValidation
})

const forgotPasswordValidation = Yup.object({
  ...emailValidation
})

const addTemplateValidation = Yup.object({
  ...nameValidation,
  ...desValidation,
  ...templateFields
})

const contactNumberValidation = {
  contactNumber: Yup.number().required('Number is required')
};

const clothTypeValidation = {
  clothType: Yup.string().oneOf(['Sherwani', 'Kurta'])
};

const clothColorValidation = {
  clothColor: Yup.string().required('color of the clot is required')
}; 
const clothNumberValidation = {
  clothNumber: Yup.string().required('number of the clot is required')
}; 
const clothSizeValidation = {
  clothColor: Yup.string().required('color of the clot is required')
}; 

const UserFormValidation = Yup.object({
  ...nameValidation,
  ...emailValidation,
  ...contactNumberValidation,
  ...clothTypeValidation,
  ...clothColorValidation,
  ...clothNumberValidation,
  ...clothSizeValidation
});

export default {
  signupValidation,
  loginValidation,
  forgotPasswordValidation,
  addTemplateValidation,
  UserFormValidation
}
