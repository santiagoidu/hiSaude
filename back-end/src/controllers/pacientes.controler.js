const Paciente = require('../models/pacientes.model')

module.exports = {
    
    
    index(req, res){
        res.json({message: "teste"})
    },
    async create(req, res){
        const {nome_paciente, celular_paciente, data_nascimento, status_ativo, email_paciente, senha_paciente} = req.body

        let data = {}

        let user = Paciente.findOne({email_paciente})
        if(!user){
            data = {nome_paciente, celular_paciente, data_nascimento, status_ativo, email_paciente, senha_paciente}
            user = await Paciente.create(data)
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
    }
}