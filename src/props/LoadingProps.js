import PropTypes from 'prop-types';

export default {
  props: {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.number,
    color: PropTypes.string,
    visible: PropTypes.bool.isRequired
  },
  defaultProps: {
    align: 'center',
    size: 18,
    color: '#cb001a'
  }
};
