import React, { memo } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';

// util
import { validation } from 'utils';

// component
import { LeftSection, LinkWithMessage, RightSection } from './common';

// styles
import './styles/forgot-password.scss';

const { forgotPasswordValidation } = validation;
const initialValues = {
	email:'',
};

const handleSubmit = (value, {setSubmitting}) => {
	console.log(value);
	setSubmitting(false);
};

function ForgotPassword() {
	return (
		<div className="d-flex forgot-password">
			<LeftSection />
			<RightSection title="Forgot Password">
				<Formik
					initialValues={initialValues}
					validationSchema={forgotPasswordValidation}
					onSubmit={handleSubmit}
				>
					<Form>
						<div className="form-group w-100">
							<Field name="email" className="form-control" placeholder="Enter email" />
							<ErrorMessage name="email" />
						</div>
						<button type="submit" className="btn btn-primary w-100">Submit</button>
						<LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />
					</Form>
				</Formik>
			</RightSection>
		</div>
	);
}

export default memo(ForgotPassword);

