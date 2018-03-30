import logger from '../middleware/logger'
import baseRouter from './base'
import userRouter from './user'

export function setRoutes(app){
  app.use('*', logger)
  app.use('/api/user', userRouter)
  app.use('*', baseRouter)
}
