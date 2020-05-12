import PropTypes from 'prop-types';

export default {
  props: {
    formFields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        field: PropTypes.string,
        fieldProps: PropTypes.object
      })
    ).isRequired,
    field: PropTypes.oneOf(['Field', 'FieldArray']),
    buttonTitle: PropTypes.string.isRequired,
    componentBeforeButton: PropTypes.element,
    componentAfterButton: PropTypes.element,
  },
  defaultProps: {
    field: 'Field'
  }
};
