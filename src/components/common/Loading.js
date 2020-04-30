import React, { memo } from 'react';

// props
import { LoadingProps } from 'props';

function Loading({ size: fontSize, color, visible, align }) {
  return(
    visible &&
      <span className={`text-${align}`}>
        <i className="fas fa-spinner fa-spin" style={{fontSize, color}}/>
      </span>
  );
}

const { props, defaultProps } = LoadingProps;
Loading.propTypes = props;
Loading.defaultProps = defaultProps;

export default memo(Loading);
