import React, { memo } from 'react';

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
				<form>
					<div className="form-group w-100">
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<div className="form-group w-100">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<LinkWithMessage text="Forgot Password" to="/forgot-password" />
					<button type="submit" className="btn btn-primary w-100">Login</button>
					<LinkWithMessage hint="Don't have an account?" text="Sign Up Now" to="/register" />
				</form>
			</RightSection>
		</div>
	);
}

export default memo(Login);
