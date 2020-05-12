import React, { memo } from 'react';
import { Field } from 'formik';

// props
// import { ErrorMessageProps } from 'props';

// eslint-disable-next-line react/prop-types
function ErrorMessage({ name }) {
  return(
    <Field name={name}>
      {({ meta: {error, touched} }) => {
			  const flag = (touched && error && typeof error === 'string');
			  return flag ? <small>{error}</small> : null;
		  }}
    </Field>
  );
}

// const { props, defaultProps } = ErrorMessageProps;
// ErrorMessage.propTypes = props;
// ErrorMessage.defaultProps = defaultProps;

export default memo(ErrorMessage);
