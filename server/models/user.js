import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
UserSchema.plugin(timestamps)
const User = mongoose.model('User', UserSchema)

module.exports = User
