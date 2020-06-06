import propTypes from 'prop-types'

export default {
  propTypes: {
    form: propTypes.shape({ values: propTypes.arrayOf(propTypes.string) })
      .isRequired,
    push: propTypes.func.isRequired,
    remove: propTypes.func.isRequired
  },
  defaultProps: {
    form: {
      values: []
    },
    push: function () {
      return null
    },
    remove: function () {
      return null
    }
  }
}
