import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'

const PostSchema = new mongoose.Schema({
  postname: String
})
PostSchema.plugin(timestamps)
const Post = mongoose.model('Post', PostSchema)

module.exports = Post
