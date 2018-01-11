export const UPDATE_CURRENT_REPORT = 'UPDATE_CURRENT_REPORT'

const initialState = {
  currentReport: {
    horse_name: 'Jörid',
    activity: '',
    location: '',
    duration: 0,
    date: null,
    rider: ''
  },
  entities: []
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

    default:
      return state
  }
}