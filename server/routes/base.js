import baseController from '../controllers/base.js'
const baseRouter = require('express').Router()

baseRouter.get('*', baseController.get)

export default baseRouter
