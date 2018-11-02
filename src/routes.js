const express = require('express')
const routes = express.Router()
const CitizenController = require('./controllers/CitizenController')

routes.get('/citizen', CitizenController.index)
routes.post('/citizen', CitizenController.store)
routes.get('/citizen/:cpf', CitizenController.show)
routes.put('/citizen/:cpf', CitizenController.update)
routes.delete('/citizen/:cpf', CitizenController.destroy)

module.exports = routes