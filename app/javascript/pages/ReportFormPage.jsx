import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { UPDATE_CURRENT_REPORT, createReport } from '../store/modules/reports'

const mapStateToProps = state => {
  const { horse_name, date } = state.reports.currentReport

  return {
    horse_name,
    date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCurrentReport: event => {
      const {name, value} = event.target
      return dispatch({
        type: UPDATE_CURRENT_REPORT,
        payload: {
          name,
          value
        }
      })
    },
    createReport: event => {
      event.preventDefault()
      return dispatch(createReport())
    },

    showCreate: event => {
      event.preventDefault()
      return dispatch({
        type: TOGGLE_SHOW_CREATE
      })
    }
  }
}

const ReportFormPage = ({ horse_name, date, updateCurrentReport, createReport }) => (

  <div>
    <h1>New Report</h1>
    <form onSubmit={createReport}>
      <label>Pferde Name:</label>
      <input
        type="text"
        name="horse_name"
        value={horse_name}
        onChange={updateCurrentReport}
      />
      <br />
      <label>Datum:</label>
      <input
        type="date"
        name="date"
        value={date}
        onChange={updateCurrentReport}
      />
      <br />
      <button type="submit">Speichern</button>
    </form>
  </div>
)

ReportFormPage.propTypes = {
  horse_name: PropTypes.string,
  date: PropTypes.string,
  updateCurrentReport: PropTypes.func,
  saveCurrentReport: PropTypes.func,
  createReport: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportFormPage)
