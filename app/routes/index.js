import React from 'react'
import { Route } from 'react-router'
import Home from '.././containers/Home'
import About from '.././containers/About'
import AccessDenied from '.././containers/AccessDenied'
import { interceptor } from '../middleware'

export default (
  <Route>
    <Route path="/" component={Home} onEnter={interceptor()} />
    <Route path="/about" component={About} onEnter={interceptor()} />
    <Route path="*" component={AccessDenied} />
  </Route>
)
