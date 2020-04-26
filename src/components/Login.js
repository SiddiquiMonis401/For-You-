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

const formikProps={
	initialValues:{
		email:'',
		password:'',
	},
	validationSchema:validation.loginValidation,
	onSubmit(value, { setSubmitting, resetForm }){
		console.log(value);
		setSubmitting(false);
		resetForm();

	}
};

const formFields = [
					{name:'email', placeholder:'Please enter your email', type:'email'},
					{name:'password', placeholder:'Please enter the password', type:'password'},
];

const componentBeforeButton = <LinkWithMessage hint="Don't have an account ?" text="Sign up" to="/register" />;
const componentAfterButton = <LinkWithMessage hint="Forgot password ?" text="Reset" to="/forgot-password" />;
                              
    
	
function Login() {
	return (
		<div className="d-flex login">
			<LeftSection />
			<RightSection title="Login">
				<FormBuilder formikProps={formikProps} buttonTitle="Login" formFields={formFields} componentAfterButton={componentAfterButton} componentBeforeButton={componentBeforeButton} />
			</RightSection>
		</div>
	);
}

export default memo(Login);
