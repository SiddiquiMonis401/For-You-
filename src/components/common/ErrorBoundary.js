import React, { Component } from 'react';
import { ErrorBoundaryProps } from 'props';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		console.error('error', error);
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		console.error('error', error);
		console.error('errorInfo', errorInfo);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			// TODO: Design fallback UI
			return <h1>Something went wrong.</h1>;
		}

		return children;
	}
}

const { props, defaultProps } = ErrorBoundaryProps;
ErrorBoundary.propTypes = props;
ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;
