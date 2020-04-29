import React, { memo } from 'react';

// util
import { validation } from 'utils';

// component
import {
  LeftSection,
  RightSection,
  FormBuilder,
  LinkWithMessage
} from './common';

// styles
import './styles/forgot-password.scss';

const formikProps = {
  initialValues: { email: '' },
  validationSchema: validation.forgotPasswordValidation,
  onSubmit(value, { setSubmitting, resetForm }) {
    console.log(value);
    setSubmitting(false);
    resetForm();
  }
};

const formFields=[{ name: 'email', placeholder: 'Please enter email' }];

const componentAfterButton = <LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />;

function ForgotPassword() {
  return (
    <div className="d-flex forgot-password">
      <LeftSection />
      <RightSection title="Forgot Password">
        <FormBuilder
          formikProps={formikProps}
          buttonTitle="Reset password"
          formFields={formFields}
          componentAfterButton={componentAfterButton}
        />
      </RightSection>
    </div>
  );
}

export default memo(ForgotPassword);

