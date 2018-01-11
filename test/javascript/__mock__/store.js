import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = initialStore => {
  const middlewares = [thunk]
  return configureMockStore(middlewares)(initialStore)
}

export default mockStore
