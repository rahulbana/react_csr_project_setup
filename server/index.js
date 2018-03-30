import express from 'express'
import { setRoutes } from './routes'
import { setupServer } from './config/server.js'

const app = express()
const port = process.env.PORT
const env = process.env.NODE_ENV
const protocol = process.env.PROTOCOL
const domain = process.env.DOMAIN

setupServer(app)
setRoutes(app)

const server = app.listen(port, () => {
  console.log(`Server running on : ${protocol}://${domain}:${port}/ in ${env} mode`)
})

module.exports = server