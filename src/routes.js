const express = require('express')

const routes = express.Router()

const Usuario = require('./controllers/user.controller')
const Paciente = require('./controllers/pacientes.controller')

routes.get('/', Paciente.index)

//Rotas de Pacientes 
routes.post('/api/pacientes', Paciente.create)
routes.get('/api/pacientes', Paciente.index)
routes.get('/api/pacientes.datails/:_id', Paciente.datails)
routes.delete('/api/pacientes/:_id', Paciente.delete)
routes.put('/api/pacientes', Paciente.update)

//Rotas de Usuarios
routes.post('/api/usuario', Usuario.create)
routes.delete('/api/usuario/:_id', Usuario.delete)
routes.put('/api/usuario', Usuario.update)

module.exports = routes 