import React, { memo } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

// props
import { LoadingProps } from 'props'

function Loading ({ size, color, visible }) {
  return visible && <AiOutlineLoading3Quarters />
}

const { props, defaultProps } = LoadingProps
Loading.propTypes = props
Loading.defaultProps = defaultProps

export default memo(Loading)
