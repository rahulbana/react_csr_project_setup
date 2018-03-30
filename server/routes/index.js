import baseRouter from './base'
import apiRouter from './api'

export function setRoutes(app){
  app.use('/api', apiRouter)
  app.use('*', baseRouter)
}
