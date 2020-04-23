import React, { memo } from 'react';

// Formik Import
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Yup Imports 
import * as Yup from 'yup';

// component
import {
	LeftSection,
	RightSection,
	LinkWithMessage
} from './common';

// styles
import './styles/login.scss';

function Login() {
	return (
		<div className="d-flex login">
			<LeftSection />
			<RightSection title="Login">
				<Formik
				  initialValues={{
		                           email:'', 
		                           password:'',
		                  }}
				  validationSchema={Yup.object({
					  email:Yup.string()
					  .email('This is not an email')
					  .required('email is required please enter!!'),
					  password:Yup.string()
					  .required('Plz enter the password'),
				  })}
				  onSubmit={(value, {setSubmitting}) => {
					  console.log(value);
					  setSubmitting(false);
				  }}
				>
					<Form>
					<div className="form-group w-100">
						<Field name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
						<ErrorMessage name="email" />
					</div>
					<div className="form-group w-100">
						<Field name="password"  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> 
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
