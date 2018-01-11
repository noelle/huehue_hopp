import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DateTime } from 'luxon'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  const reports = state.reports.entities
  const startDate = DateTime.local().startOf('week')
  const reportsOfTheWeek = filterCurrentWeekReports(reports, startDate)

  return {
    reports: reportsOfTheWeek,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ReportsPage = ({ reports }) => (
  <div>
    <h1>HüüHopp</h1>
    <p>
      Current Week: {DateTime.local().startOf('week').toISODate()} - {DateTime.local().endOf('week').toISODate()}
    </p>
    <Calendar reports={reports} />
  </div>
)

const filterCurrentWeekReports = (reports, startDate) => {
  const endDate = startDate.endOf('week')
  return reports.filter(function(report) {
    return report.date >= startDate && report.date <= endDate
  })
}

ReportsPage.propTypes = {
  reports: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPage)
