
import React, { memo } from 'react';

// component

// Formik
import { Formik,Field,ErrorMessage,Form } from 'formik';

// Yup
import * as Yup from 'yup';
import { LeftSection, LinkWithMessage, RightSection } from './common';

// styles
import './styles/forgot-password.scss';

function ForgotPassword() {
	return (
		<div className="d-flex forgot-password">
			<LeftSection />
			<RightSection title="Forgot Password">
				<Formik
				  initialValues={{email:''}}
				  validationSchema={Yup.object({
					  email:Yup.string()
					  .email('This is not the email')
					  .required('Please enter the email!')
					})
				  }
				  onSubmit={(value, {setSubmitting}) => {
					  console.log(value);
					  setSubmitting(false);
				  }}
				>
					<Form>
					<div className="form-group w-100">
					    <Field name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> 
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

