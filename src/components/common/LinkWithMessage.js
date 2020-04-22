import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// props
import { LinkWithMessageProps } from 'props';

// styles
import './styles/lint-with-message.scss';

const LinkWithMessage = ({hint, text, to}) => (
	<span className="d-flex w-100 mt-4 mb-4 justify-content-end link-with-message">
		{hint}
		<Link to={to} className="ml-2">{text}</Link>
	</span>
);

const { props, defaultProps } = LinkWithMessageProps;
LinkWithMessage.propTypes = props;
LinkWithMessage.defaultProps = defaultProps;

export default memo(LinkWithMessage);
