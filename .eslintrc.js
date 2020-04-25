module.exports = {
	'root': true,
	'extends': [
		'react-app',
		'airbnb',
		'plugin:jsx-a11y/recommended',
		'prettier',
		'prettier/react'
	],
	'plugins': ['jsx-a11y', 'prettier'],
	'rules': {
		'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
		'semi': ['error', 'always'],
		'semi-spacing': 'error',
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
		"import/prefer-default-export": "off",
		"react/jsx-props-no-spreading": "off",
	},
	"settings": {
		"import/resolver": {
			"node": {
				"paths": ["src"],
				"extensions": [".js", ".jsx"],
			}
		},
	}
};
