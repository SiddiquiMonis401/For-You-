import PropTypes from 'prop-types';

export default {
  props: {
    hint: PropTypes.string,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  },
  defaultProps: {}
};
