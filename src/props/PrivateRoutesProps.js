import PropTypes from 'prop-types';

export default {
  props: {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired,
  },
  defaultProps: {}
};
