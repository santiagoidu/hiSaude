const express = require('express')

const routes = express.Router()

const Paciente = require('./controllers/pacientes.controller')

routes.get('/', Paciente.index)

//Rotas de Pacientes 
routes.post('/api/pacientes', Paciente.create)
routes.get('/api/pacientes/', Paciente.index)
routes.get('/api/pacientes.datails/:_id', Paciente.datails)
routes.delete('/api/pacientes/:_id', Paciente.delete)

module.exports = routes 