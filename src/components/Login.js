import React, { memo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// util
import { validation } from 'utils';

// component
import {
	LeftSection,
	RightSection,
	LinkWithMessage
} from './common';

// styles
import './styles/login.scss';

const { loginValidation } = validation;
const initialValues = {
	email:'',
	password:'',
};

const handleSubmit = (value, {setSubmitting}) => {
	console.log(value);
	setSubmitting(false);
};

function Login() {
	return (
		<div className="d-flex login">
			<LeftSection />
			<RightSection title="Login">
				<Formik
					initialValues={initialValues}
					validationSchema={loginValidation}
					onSubmit={handleSubmit}
				>
					<Form>
						<div className="form-group w-100">
							<Field name="email" className="form-control" placeholder="Enter email"/>
							<ErrorMessage name="email" />
						</div>
						<div className="form-group w-100">
							<Field name="password" type="password" className="form-control" placeholder="Password" />
							<ErrorMessage name="password" />
						</div>
						<LinkWithMessage text="Forgot Password" to="/forgot-password" />
						<button type="submit" className="btn btn-primary w-100">Login</button>
						<LinkWithMessage hint="Don't have an account?" text="Sign Up Now" to="/register" />
					</Form>
				</Formik>
			</RightSection>
		</div>
	);
}

export default memo(Login);
