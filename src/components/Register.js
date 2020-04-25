import React, { memo } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// util
import { validation } from 'utils';

// component
import {
	LeftSection,
	// LinkWithMessage,
	RightSection,
	FormBuilder
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
	onSubmit(value, {setSubmitting}) {
		console.log(value);
		setSubmitting(false);
	}
};

function Signup() {
	return (
		<div className="d-flex signup">
			<LeftSection />
			<RightSection title="Signup" withLogo={false}>
				<FormBuilder
					formikProps={FormBuilderProps}
					buttonTitle="Signup"
					formFields={[{name: 'name', placeholder: 'Name'}, {name: 'email', placeholder: 'Email'}, {name: 'password', placeholder: 'Password', fieldProps: {type: 'password'}}, {name: 'password', placeholder: 'Confirm password', fieldProps: {type: 'password'}}]}
				/>
			</RightSection>
		</div>
	);
}

export default memo(Signup);
