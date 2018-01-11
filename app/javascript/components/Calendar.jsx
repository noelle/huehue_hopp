import React from 'react'
import PropTypes from 'prop-types'
import Day from './Day'

const Calendar = ({ reports }) => (
  <div className="week">
    <div className="day">MO</div>
    <div className="day">DI</div>
    <div className="day">MI</div>
    <div className="day">DO</div>
    <div className="day">FR</div>
    <div className="day">SA</div>
    <div className="day">SO</div>

    <Day reports={groupDayReports(reports)[1]} />
    <Day reports={groupDayReports(reports)[2]} />
    <Day reports={groupDayReports(reports)[3]} />
    <Day reports={groupDayReports(reports)[4]} />
    <Day reports={groupDayReports(reports)[5]} />
    <Day reports={groupDayReports(reports)[6]} />
    <Day reports={groupDayReports(reports)[7]} />
  </div>
)

const groupDayReports = reports => {
  return reports.reduce(function(days, report) {
    if (typeof days[report.date.weekday] === 'undefined') {
      days[report.date.weekday] = []
    }
    days[report.date.weekday].push(report)
    return days
  }, {})
}

Calendar.propTypes = {
  reports: PropTypes.array
}

export default Calendar
