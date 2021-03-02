const Usuario = require('../models/user.model')

module.exports = {
    
    async create(req, res){
        const {nome, email, senha} = req.body

        let data = {}

        let user = await Usuario.findOne({email})
        if(!user){
            data = { nome, email, senha}
            user = await Usuario.create(data)
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
    },

    async delete(req, res){
        const {_id} = req.params
        const usuario = await Usuario.findByIdAndDelete({_id})
        return res.json(usuario)
    },
    async update(req, res){
        const { _id, nome, email, senha} = req.body
        const data = {nome, email, senha}
        const usuario = await Usuario.findOneAndUpdate({_id}, data, {new:true})
        res.json(usuario)
    }
}