import React from 'react';
import PropTypes from 'prop-types';

export default {
	props: {
		welcomeNote: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		children: PropTypes.node
	},
	defaultProps: {
		welcomeNote: 'Welcome To',
		title: 'Darzi Lab',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		children: <button type="button" className="btn pt-2 btn-outline">Read More</button>
	}
};
