import React, { memo } from 'react';

// props
import { RightSectionProps } from 'props';

// images
import logo from 'assets/images/logo.png';

// styles
import './styles/right-section.scss';

function RightSection({ withLogo, title, children }) {
	return (
		<div className="w-50 vh-100 d-flex flex-column justify-content-center align-items-center">
			<div className="text-center right-section">
				{ withLogo && <img src={logo} alt="" width="90px"/> }
				<h1 className="mb-5 mt-4 pt-2 pb-4 position-relative s-heading">{title}</h1>
				{children}
			</div>
		</div>
	);
}

const { props, defaultProps } = RightSectionProps;
RightSection.propTypes = props;
RightSection.defaultProps = defaultProps;

export default memo(RightSection);
