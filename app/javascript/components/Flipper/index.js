import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.scss'

const Flipper = ({ isFlipped, children }) => {
  const [front, back] = React.Children.toArray(children)
  return (
    <div className={classNames('flip-container', { flipped: isFlipped })}>
      <div className="flipper">
        <div className="front">{front}</div>
        <div className="back">{back}</div>
      </div>
    </div>
  )
}

Flipper.propTypes = {
  isFlipped: PropTypes.bool,
  children: PropTypes.node
}

export default Flipper
