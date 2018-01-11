import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => {
  const { horse_name } = state.reports.currentReport
  return {
    horse_name
  }
}

const ReportFormPage = ({ horse_name }) => (
  <div>
    <h1>New Report</h1>
    <form>
      <label>Pferde Name:</label>
      <input type="text" name="horse_name" value={horse_name} />
    </form>
  </div>
)

ReportFormPage.propTypes = {
  horse_name: PropTypes.string
}

export default connect(mapStateToProps)(ReportFormPage)
