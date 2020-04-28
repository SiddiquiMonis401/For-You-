import React, { memo } from 'react';

// util
import { validation } from 'utils';

// component
import { LeftSection, RightSection, FormBuilder } from './common';

// styles
import './styles/forgot-password.scss';

const FormBuilderProps = {
	initialValues:{email:''},
	validationSchema:validation.forgotPasswordValidation,
	onSubmit(value, { setSubmitting, resetForm }) {
		console.log(value);
		setSubmitting(false);
		resetForm();
	}
};

const formFields=[{name: 'email' ,placeholder: 'Please enter email'}];

function ForgotPassword() {
	return (
		<div className="d-flex forgot-password">
			<LeftSection />
			<RightSection title="Forgot Password">
				<FormBuilder formikProps={FormBuilderProps} buttonTitle="Reset password" field="Field" formFields={formFields} />
			</RightSection>
		</div>
	);
}

export default memo(ForgotPassword);

