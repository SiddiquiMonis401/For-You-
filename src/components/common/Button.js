import React, { memo } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import classNames from 'classnames';

// props
import { ButtonProps } from 'props';

// components
import Loading from './Loading';

// styles
import './styles/button.scss';

// TODO: Add left right icon support.
function Button({ loading, onClick, title, disabled, icon, fab, ...rest }) {
  return(
    <BootstrapButton {...rest} className={classNames({ 'btn-fab': fab })} disabled={disabled || loading} onClick={onClick}>
      {loading ? <Loading visible /> : icon || title}
    </BootstrapButton>
  );
}

const { props, defaultProps } = ButtonProps;
Button.propTypes = props;
Button.defaultProps = defaultProps;

export default memo(Button);
