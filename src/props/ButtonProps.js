import PropTypes from 'prop-types';
import { noop } from 'lodash';

// supports these and button props
// https://react-bootstrap.github.io/components/buttons/#button-props
export default {
  props: {
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
  },
  defaultProps: {
	  loading: false,
    onClick: noop
  }
};
