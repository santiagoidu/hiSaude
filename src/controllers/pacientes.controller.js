const Paciente = require('../models/pacientes.model')

module.exports = {
    
    async index(req, res){
        const pacientes = await Paciente.find()

        res.json(pacientes)
    },
    async create(req, res){
        const {nome_paciente, celular_paciente, data_nascimento, status_ativo} = req.body

        let data = {}

        let user = await Paciente.findOne({email_paciente})
        if(!user){
            data = {nome_paciente, celular_paciente, data_nascimento, status_ativo}
            user = await Paciente.create(data)
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
    },
    async datails(req, res){
        const {_id} = req.params
        console.log({_id})
        const pacientes = await Paciente.findOne({_id})
        res.json(pacientes)
    },
    async delete(req, res){
        const {_id} = req.params
        const pacientes = await Paciente.findByIdAndDelete({_id})
        return res.json(pacientes)
    },
    async update(req, res){
        const { _id, nome_paciente, celular_paciente, data_nascimento, status_ativo, cep, rua, numero, complemento, bairro, cidade, uf } = req.body
        const data = {nome_paciente, celular_paciente, data_nascimento, status_ativo, cep, rua, numero, complemento, bairro, cidade, uf}
        const pacientes = await Paciente.findOneAndUpdate({_id}, data, {new:true})
        res.json(pacientes)
    }
}