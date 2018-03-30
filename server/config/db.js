import mongoose from 'mongoose'

const mongodbURI = process.env.MONGODB_URI

export function setDB(app, cb){
  mongoose.connect(mongodbURI)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function callback () {
    console.log("database connected...")
    cb()
  })
}
