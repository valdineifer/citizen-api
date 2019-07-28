const express = require('express')
const routes = express.Router()
const CitizenController = require('./controllers/CitizenController')
const AuthController = require('./controllers/AuthController')
const AuthMiddleware = require('./middlewares/auth')

routes.get('/citizen', CitizenController.index)
routes.post('/citizen', AuthMiddleware, CitizenController.store)
routes.get('/citizen/:cpf', CitizenController.show)
routes.put('/citizen/:cpf', AuthMiddleware, CitizenController.update)
routes.delete('/citizen/:cpf', AuthMiddleware, CitizenController.destroy)

// routes.post('/auth/register', AuthController.register)
routes.post('/auth/authenticate', AuthController.login)

module.exports = routes
