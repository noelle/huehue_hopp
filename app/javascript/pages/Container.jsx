import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const NullPage = () => null

function mapStateToProps(state) {
  const { type, routesMap } = state.location
  const Page = (routesMap[type] && routesMap[type].page) || NullPage

  return {
    Page
  }
}

const Container = ({ Page }) => {
  return (
    <div className="container">
      <Page />
    </div>
  )
}

Container.propTypes = {
  Page: PropTypes.func
}

export default connect(mapStateToProps)(Container)
