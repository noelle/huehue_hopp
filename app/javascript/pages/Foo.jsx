import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { flipFoo } from 'store/modules/foo'
import Circle from 'components/Circle'
import Flipper from 'components/Flipper'

function mapStateToProps(state) {
  const { isFlipped } = state.foo
  return { isFlipped }
}

function mapDispatchToProps(dispatch) {
  return {
    flipFoo: isFlipped => dispatch(flipFoo(isFlipped))
  }
}

class Foo extends Component {
  static propTypes = {
    isFlipped: PropTypes.bool,
    flipFoo: PropTypes.func
  }

  render() {
    const { isFlipped } = this.props
    return (
      <div className="page page-foo">
        <Flipper isFlipped={isFlipped}>
          <Circle text="Simplificator" />
          <Circle text="Is great!" />
        </Flipper>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foo)
