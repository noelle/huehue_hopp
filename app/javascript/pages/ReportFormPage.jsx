import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { UPDATE_CURRENT_REPORT, SAVE_CURRENT_REPORT } from '../store/modules/reports'

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
    },
    saveCurrentReport: event => {
      event.preventDefault()
      return dispatch({
        type: SAVE_CURRENT_REPORT
      })
    }
  }
}

const ReportFormPage = ({ horse_name, updateCurrentReport, saveCurrentReport }) => (
  <div>
    <h1>New Report</h1>
    <form onSubmit={saveCurrentReport}>
      <label>Pferde Name:</label>
      <input
        type="text"
        name="horse_name"
        value={horse_name}
        onChange={updateCurrentReport}
      />
      <br />
      <button type="submit">Speichern</button>
    </form>
  </div>
)

ReportFormPage.propTypes = {
  horse_name: PropTypes.string,
  updateCurrentReport: PropTypes.func,
  saveCurrentReport: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportFormPage)
