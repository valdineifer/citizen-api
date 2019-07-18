const mongoose = require('mongoose')
const Citizen = mongoose.model('Citizen')
const axios = require('axios')

async function getAddress (cep) {
  let address = {}

  try {
    address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  } catch (err) {
    console.log(err)
  }

  // Overwriting the variable by itself
  address = {
    address: address.data.logradouro,
    neighborhood: address.data.bairro,
    city: address.data.localidade,
    uf: address.data.uf
  }

  return address
}

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query
    const citizen = await Citizen.paginate({}, { page, limit: 10 })

    return res.json(citizen)
  },

  async store (req, res) {
    const c = await Citizen.findOne({ cpf: req.body.cpf })
    let address = {}

    if (c != null) {
      // 400 = Bad Request
      return res.status(400).send('The citizen with this CPF is already on our system')
    }

    address = await getAddress(req.body.cep)

    const citizen = await Citizen.create({ ...req.body, ...address })

    return res.json(citizen)
  },

  async show (req, res) {
    const citizen = await Citizen.findOne({ cpf: req.params.cpf })

    return res.json(citizen)
  },

  async update (req, res) {
    let citizen = await Citizen.findOne({ cpf: req.params.cpf })
    let address

    if (citizen.cpf !== req.params.cpf) {
      return res.status(404).send('There is no citizen with this CPF')
    }

    if (req.body.cep && req.body.cep !== citizen.cep) {
      address = await getAddress(req.body.cep)
    }

    // Putting the 'new' Object property, the new content will be insert on the variable,
    // otherwise the 'product' variable will has the older content
    citizen = await Citizen.findOneAndUpdate(
      { cpf: req.params.cpf },
      { ...req.body, ...address },
      { new: true })

    return res.json(citizen)
  },

  async destroy (req, res) {
    await Citizen.findOneAndDelete({ cpf: req.params.cpf })

    return res.sendStatus(204)
  }
}
