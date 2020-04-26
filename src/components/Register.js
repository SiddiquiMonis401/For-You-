import React, { memo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// util
import { validation } from 'utils';

// component
import {
	LeftSection,
	LinkWithMessage,
	RightSection
} from './common';

// styles
import './styles/signup.scss';

const { signupValidation } = validation;
const initialValues = {
	name:'',
	email:'',
	password:'',
	confirmPassword:'',
};

const handleSubmit = (value, {setSubmitting}) => {
	console.log(value);
	setSubmitting(false);
};

function Signup() {
	return (
		<div className="d-flex signup">
			<LeftSection />
			<RightSection title="Signup" withLogo={false}>
				<Formik
					initialValues={initialValues}
					validationSchema={signupValidation}
					onSubmit={handleSubmit}
				>
					<Form>
						<div className="form-group w-100">
							<Field name="name" className="form-control" placeholder="Enter your name" />
							<ErrorMessage name="name" />
						</div>
						<div className="form-group w-100">
							<Field name="email" className="form-control" placeholder="Enter email" />
							<ErrorMessage name="email" />
						</div>
						<div className="form-group w-100">
							<Field name="password" type="password" className="form-control" placeholder="Password" />
							<ErrorMessage name="password" />
						</div>
						<div className="form-group w-100">
							<Field name="confirmPassword" type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
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
