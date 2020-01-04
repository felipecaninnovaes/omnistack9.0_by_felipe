//index, show, store, update, destroy{
//
// index: retorona uma listagem do controller (ex: lista todas as sessão)
// show: listar um unico objeto do controller (ex: lista uma unica sessão)
// store: cria um objeto no controller (ex: criar uma sessão)
// update: quando quer fazer uma auteração no controller (ex: altera um sessão)
// destroy: detela um objeto do controller (ex: detela uma sessão)
//}

const User = require('../models/User')

module.exports = {
    async store(req ,res){
        const { email } = req.body

        let user = await User.findOne( { email })

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    }
}