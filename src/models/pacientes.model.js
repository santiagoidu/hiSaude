const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
    nome_paciente: String,
    celular_paciente: Number,
    data_nascimento: String,
    status_ativo: Boolean,
    cep: String,
    rua: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    uf: String,
}, {
    timestamps:true
}) 

const pacientes = mongoose.model('Pacientes', DataSchema)
module.exports = pacientes 