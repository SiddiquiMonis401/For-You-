import React, { memo } from 'react';

// component
import {LeftSection, LinkWithMessage, RightSection} from './common';

// styles
import './styles/forgot-password.scss';

function ForgotPassword() {
	return (
		<div className="d-flex forgot-password">
			<LeftSection />
			<RightSection title="Forgot Password">
				<form>
					<div className="form-group w-100">
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<button type="submit" className="btn btn-primary w-100">Submit</button>
					<LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />
				</form>
			</RightSection>
		</div>
	);
}

export default memo(ForgotPassword);
