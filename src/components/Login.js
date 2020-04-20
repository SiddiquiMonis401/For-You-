import React, { memo } from 'react';

// images
import logo from 'assets/images/logo.png';
// styles
import './styles/login.scss';

function Login() {
	return (
		<div className="d-flex">
			<div className="w-50">
				<div className="bg-cover pl-5 w-100 d-flex flex-column justify-content-center">
					<h4 className="mb-2 text-uppercase">Welcome To</h4>
					<h1 className="mb-5 pb-4 position-relative text-uppercase">Darzi Lab</h1>
					<p className="mb-4 pb-2">
						Lorem Ipsum is simply dummy text of the printing <br/>
						and typesetting industry. Lorem Ipsum has been <br/>
						the industry&apos;s standard dummy text ever since the <br/>
						1500s, when an unknown printer took a galley of <br/>
						type and scrambled it to make a type specimen <br/> book.
					</p>
					<button type="button" className="btn pt-2 btn-outline-danger">Read More</button>
				</div>
			</div>
			<div className="w-50 vh-100 d-flex flex-column justify-content-center align-items-center">
				<form className="d-flex flex-column justify-content-center align-items-center">
					<img src={logo} alt="" width="90px"/>
					<h1 className="mb-5 mt-4 pt-2 pb-4 position-relative">Login</h1>
					<div className="form-group w-100">
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					</div>
					<div className="form-group w-100">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<span className="d-flex w-100 mt-3 mb-4 justify-content-center">
						Don&apos;t have an account?
						<a href="/register" className="ml-3">Sign Up Now</a>
					</span>
					<button type="submit" className="btn btn-primary w-100">Login</button>
				</form>
			</div>
		</div>
	);
}

export default memo(Login);
