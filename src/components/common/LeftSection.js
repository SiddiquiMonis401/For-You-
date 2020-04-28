import React, { memo } from 'react';

// props
import { LeftSectionProps } from 'props';

// styles
import './styles/left-section.scss';

// TODO: Add imageSrc support, so background image update as per demand.
function LeftSection({ welcomeNote, title, description, children }) {
	return (
		<div className="w-50 xs-sm-none">
			<div className="bg-cover pl-5 w-100 d-flex flex-column justify-content-center">
				<h4 className="mb-2 text-uppercase">{welcomeNote}</h4>
				<h1 className="mb-5 pb-4 p-heading position-relative text-uppercase">{title}</h1>
				<p className="mb-4 pb-2">
					{description}
				</p>
				{children}
			</div>
		</div>
	);
}

const { props, defaultProps } = LeftSectionProps;
LeftSection.propTypes = props;
LeftSection.defaultProps = defaultProps;

export default memo(LeftSection);
