import React, { memo } from 'react';

// util
import { validation } from 'utils';

// component
import {
	LeftSection,
	RightSection,
	LinkWithMessage,
	FormBuilder,
} from './common';

// styles
import './styles/login.scss';

const formikProps = {
	initialValues:{
		email: '',
		password: '',
	},
	validationSchema: validation.loginValidation,
	onSubmit(value, { setSubmitting, resetForm }){
		console.log(value);
		setSubmitting(false);
		resetForm();

	}
};

const formFields = [
	{name: 'email', placeholder: 'Email', type: 'email'},
	{name: 'password', placeholder: 'Password', type: 'password'},
];

const componentAfterButton = <LinkWithMessage hint="Don't have an account ?" text="Sign up" to="/register" />;
const componentBeforeButton = <LinkWithMessage text="Forgot password" to="/forgot-password" />;

function Login() {
	return (
		<div className="d-flex login">
			<LeftSection />
			<RightSection title="Login">
				<FormBuilder
					formikProps={formikProps}
					buttonTitle="Login"
					formFields={formFields}
					componentAfterButton={componentAfterButton}
					componentBeforeButton={componentBeforeButton}
				/>
			</RightSection>
		</div>
	);
}

export default memo(Login);
