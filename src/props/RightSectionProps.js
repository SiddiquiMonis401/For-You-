import PropTypes from 'prop-types';

export default {
  props: {
    withLogo: PropTypes.bool,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  },
  defaultProps: {
    withLogo: true,
  }
};
