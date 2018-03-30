import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from 'routes'
import { store, history } from './store'
import './styles/base.scss'

render(
  <Provider store={store}>
    <Router routes={routes} history={history} key={Math.random()} />
  </Provider>,
  document.getElementById('app')
)
