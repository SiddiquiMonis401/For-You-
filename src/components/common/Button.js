import React, { memo } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

// props
import { ButtonProps } from 'props';

// components
import { Loading } from './index';

// TODO: Add left right icon support.
function Button({ loading, onClick, title, disabled, ...rest }) {
  return(
    <BootstrapButton {...rest} disabled={disabled || loading} onClick={onClick}>
      {loading ? <Loading visible /> : title}
    </BootstrapButton>
  );
}

const { props, defaultProps } = ButtonProps;
Button.propTypes = props;
Button.defaultProps = defaultProps;

export default memo(Button);
