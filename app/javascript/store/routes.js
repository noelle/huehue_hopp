import { redirect } from 'redux-first-router'
import { flipFoo } from './modules/foo'
import FooPage from 'pages/Foo'
import ReportFormPage from 'pages/ReportFormPage'
import ReportsPage from 'pages/ReportsPage'

export const ROOT = 'ROOT'
export const REPORTS = 'REPORTS'
export const NEW_REPORT = 'NEW_REPORT'
export const FOO = 'FOO'

const routesMap = {
  [ROOT]: {
    path: '/',
    thunk: (dispatch, _getState) => dispatch(redirect({ type: FOO }))
  },

  [REPORTS]: {
    path: '/reports',
    page: ReportsPage
  },

  [NEW_REPORT]: {
    path: '/reports/new',
    page: ReportFormPage
  },

  [FOO]: {
    path: '/foo',
    page: FooPage,
    thunk: dispatch => dispatch(flipFoo(true))
  }
}

export default routesMap
