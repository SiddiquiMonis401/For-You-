import React, { memo } from 'react';

// util
import { validation } from 'utils';

// component
import {
	LeftSection,
	LinkWithMessage,
	RightSection,
	FormBuilder,
} from './common';

// styles
import './styles/signup.scss';

const FormBuilderProps = {
	initialValues: {
		name:'',
		email:'',
		password:'',
		confirmPassword:'',
	},
	validationSchema: validation.signupValidation,
	onSubmit(value, { setSubmitting, resetForm }) {
		console.log(value);
		setSubmitting(false);
		resetForm();
	}
};

const formFields = [
	{name: 'name', placeholder: 'Name'},
	{name: 'email', placeholder: 'Email'},
	{name: 'password', placeholder: 'Password', type: 'password'},
	{name: 'confirmPassword', placeholder: 'Confirm password', type: 'password'}
];

const componentAfterButton = <LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />;

function Signup() {
	return (
		<div className="d-flex signup">
			<LeftSection />
			<RightSection title="Signup" withLogo={false}>
				<FormBuilder
					formikProps={FormBuilderProps}
					buttonTitle="Signup"
					formFields={formFields}
					componentAfterButton={componentAfterButton}
				/>
			</RightSection>
		</div>
	);
}

export default memo(Signup);
