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
    default:
      return state
  }
}
