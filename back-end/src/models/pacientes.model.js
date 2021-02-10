const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = new mongoose.Schema({
    nome_paciente: String,
    celular_paciente: Number,
    data_nascimento: String,
    status_ativo: Boolean,
    email_paciente: String,
    senha_paciente: String
}, {
    timestamps:true
}) 

DataSchema.pre('save', function(next){
    if(!this.isModified('senha_paciente')){
        return next()
    }
    this.senha_paciente = bcrypt.hashSync(this.senha_paciente, 10)
    next()
})

const pacientes = mongoose.model('Pacientes', DataSchema)
module.exports = pacientes 