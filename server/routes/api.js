import baseController from '../controllers/base.js'
const baseRouter = require('express').Router()

baseRouter.get('/status', baseController.status)

export default baseRouter
