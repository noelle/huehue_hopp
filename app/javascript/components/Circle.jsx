import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ text }) => <div className="circle">{text}</div>

Circle.propTypes = {
  text: PropTypes.string
}
export default Circle
