import axios from 'axios'
import { DateTime } from 'luxon'

export const UPDATE_CURRENT_REPORT = 'UPDATE_CURRENT_REPORT'
export const SAVE_CURRENT_REPORT = 'SAVE_CURRENT_REPORT'
export const CREATE_REPORT_REQUEST = 'CREATE_REPORT_REQUEST'
export const CREATE_REPORT_SUCCESS = 'CREATE_REPORT_SUCCESS'

const initialState = {
  currentReport: {
    horse_name: 'Jörid',
    activity: '',
    location: '',
    duration: 0,
    date: '',
    rider: ''
  },
  entities: [
    {
      horse_name: 'Foo',
      activity: '',
      location: '',
      duration: 0,
      date: DateTime.local(),
      rider: ''
    },
    {
      horse_name: 'Bar',
      activity: '',
      location: '',
      duration: 0,
      date: DateTime.local(),
      rider: ''
    }
  ]
}

export function createReport() {
  return (dispatch, getState) => {
    const { currentReport } = getState().reports
    dispatch({ type: CREATE_REPORT_REQUEST })
    return axios
      .post('/api/reports', { report: currentReport })
      .then(response =>
        dispatch({
          type: CREATE_REPORT_SUCCESS
        })
      )
      .catch(response => console.error(response))
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_REPORT: {
      const { name, value } = action.payload
      const { currentReport } = state
      return {
        ...state,
        currentReport: {
          ...currentReport,
          [name]: value
        }
      }
    }

    case CREATE_REPORT_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }

    case CREATE_REPORT_SUCCESS: {
      const { currentReport, entities } = state
      return {
        ...state,
        currentReport: initialState.currentReport,
        entities: [...entities, currentReport],
        isFetching: false
      }
    }

    default:
      return state
  }
}
