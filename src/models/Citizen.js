const mongoose = require('mongoose')
const mongPaginate = require('mongoose-paginate')

const CitizenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  }
})

mongoose.plugin(mongPaginate)
mongoose.model('Citizen', CitizenSchema)
