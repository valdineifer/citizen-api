const mongoose = require('mongoose')
const mongPaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    selected: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.plugin(mongPaginate)
mongoose.model('User', UserSchema)
