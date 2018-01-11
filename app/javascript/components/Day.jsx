import React from 'react'
import PropTypes from 'prop-types'

const Day = ({ reports }) => {
  const names = reports.map(function(report) {
    return <p key={report.horse_name}>{report.horse_name}</p>
  })

  return (
    <div className="day">
        {names}
    </div>
  )
}

Day.propTypes = {
  reports: PropTypes.array
}

Day.defaultProps = {
  reports: []
}

export default Day
