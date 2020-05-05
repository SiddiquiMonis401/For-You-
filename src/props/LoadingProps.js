import PropTypes from 'prop-types';
import { semiPrimary } from 'theme/colors';

export default {
  props: {
    size: PropTypes.string, // xs, lg, 6x, etc
    color: PropTypes.string,
    visible: PropTypes.bool.isRequired
  },
  defaultProps: {
    size: 'lg',
    color: semiPrimary
  }
};
