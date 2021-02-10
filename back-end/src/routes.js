const express = require('express')

const routes = express.Router()

const Paciente = require('./controllers/pacientes.controler')

routes.get('/', function(req, res){
    res.json({message: "teste"})
});

routes.post('/api/pacientes', Paciente.create)

module.exports = routes