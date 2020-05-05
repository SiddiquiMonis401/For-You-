import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// props
import { LoadingProps } from 'props';

function Loading({ size, color, visible }) {
  return(
    visible &&
    <FontAwesomeIcon icon="spinner" size={size} color={color} spin />
  );
}

const { props, defaultProps } = LoadingProps;
Loading.propTypes = props;
Loading.defaultProps = defaultProps;

export default memo(Loading);
