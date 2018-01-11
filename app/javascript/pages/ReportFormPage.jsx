import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { UPDATE_CURRENT_REPORT } from '../store/modules/reports'

const mapStateToProps = state => {
  const { horse_name } = state.reports.currentReport
  return {
    horse_name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentReport: event => {
      const { name, value } = event.target
      return dispatch({
        type: UPDATE_CURRENT_REPORT,
        payload: {
          name,
          value
        }
      })
    }
  }
}

const ReportFormPage = ({ horse_name, updateCurrentReport }) => (
  <div>
    <h1>New Report</h1>
    <form>
      <label>Pferde Name:</label>
      <input
        type="text"
        name="horse_name"
        value={horse_name}
        onChange={updateCurrentReport}
      />
    </form>
  </div>
)

ReportFormPage.propTypes = {
  horse_name: PropTypes.string,
  updateCurrentReport: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportFormPage)
