import React, { memo } from 'react';

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
				<form>
					<div className="form-group w-100">
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<div className="form-group w-100">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="form-group w-100">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="form-group w-100">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<button type="submit" className="btn btn-primary w-100">Signup</button>
					<LinkWithMessage hint="Already have account?" text="Sign In Now" to="/" />
				</form>
			</RightSection>
		</div>
	);
}

export default memo(Signup);
