import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import queryString from 'query-string'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import * as reducers from './reducers'
import routesMap from './routes'

const history = createHistory()

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = connectRoutes(history, routesMap, {
  notFoundPath: '/not_found',
  querySerializer: queryString
})
const appReducer = combineReducers({ ...reducers, location: routerReducer })

const middlewares = [routerMiddleware, thunkMiddleware]

const composeEnhancer =
  ('development' === process.env.NODE_ENV &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  appReducer,
  composeEnhancer(routerEnhancer, applyMiddleware(...middlewares))
)

export default store
