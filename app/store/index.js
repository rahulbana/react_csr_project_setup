import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import reducer from '.././reducers'

const middleware = applyMiddleware(thunk)
const initialState = {}
export const store = createStore(
  reducer,
  initialState,
  middleware
)

export let history
if (typeof __TEST__ === 'undefined') {
  history = syncHistoryWithStore(browserHistory, store)
} else {
  history = createMemoryHistory()
}
