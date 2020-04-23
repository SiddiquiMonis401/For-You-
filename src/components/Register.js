import React, { memo } from 'react';

// Formik Import
import { Formik, Form, Field, ErrorMessage, } from 'formik';

// Yup Imports 
import * as Yup from 'yup';

// component
import {
	LeftSection,
	LinkWithMessage,
	RightSection
} from './common';

// styles
import './styles/signup.scss';

function Signup() {
	return (
		<div className="d-flex signup">
			<LeftSection />
			<RightSection title="Signup" withLogo={false}>
				<Formik
				   initialValues={{
					   name:'',
					   email:'',
					   password:'',
					   confirmPassword:'',
				   }}
				   validationSchema={Yup.object({
					   name:Yup.string()
					   .min(3,'Name should be 3 characters long')
					   .required('Name is required'),
					   email:Yup.string()
					   .email('This is not the email please re-enter it!')
					   .required('require'),
					   password:Yup.string()
					   .min(8,'Password should be 8 character long or more')
					   .required('Please enter the password'),
					   confirmPassword:Yup.string()
					   .required('please re-enter the password')
					   .oneOf([Yup.ref('password')],'Password must match')
				   })}
				   onSubmit={(value, {setSubmitting}) => {
					   console.log(value);
					   setSubmitting(false);
				   }}
				>
				<Form>
				    <div className="form-group w-100">
					    <Field name="name" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your name" />
                        <ErrorMessage name="name" />  					
  					</div>
					<div className="form-group w-100">
					    <Field name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <ErrorMessage name="email" />  					
  					</div>
					<div className="form-group w-100">
						<Field name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						<ErrorMessage name="password" />
					</div>
					<div className="form-group w-100">
				        <Field name="confirmPassword" TYPE="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
						<ErrorMessage name="confirmPassword" />	
					</div>
					<button type="submit" className="btn btn-primary w-100">Signup</button>
					<LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />
				</Form>
				</Formik>
			</RightSection>
		</div>
	);
}

export default memo(Signup);
