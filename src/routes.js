const express = require('express')
const routes = express.Router()
const CitizenController = require('./controllers/CitizenController')

routes.get('/citizen', CitizenController.index)
routes.post('/citizen', CitizenController.store)
routes.get('/citizen/:id', CitizenController.show)
routes.put('/citizen/:id', CitizenController.update)
routes.delete('/citizen/:id', CitizenController.destroy)

module.exports = routes