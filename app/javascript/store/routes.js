import { redirect } from 'redux-first-router'
import { flipFoo } from './modules/foo'
import FooPage from 'pages/Foo'

export const ROOT = 'ROOT'
export const FOO = 'FOO'

const routesMap = {
  [ROOT]: {
    path: '/',
    thunk: (dispatch, _getState) => dispatch(redirect({ type: FOO }))
  },

  [FOO]: {
    path: '/foo',
    page: FooPage,
    thunk: dispatch => dispatch(flipFoo(true))
  }
}

export default routesMap
