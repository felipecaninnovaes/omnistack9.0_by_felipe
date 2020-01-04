const spot = require('../models/Spot')

module.exports = {
   async show(req, res){
        const { user_id } = req.headers

        const spots = await spot.find({user: user_id}) // => user: user_id, efetua a busca no banco de dados pela string user_id definida anteriormente

        return res.json(spots)
    }
}