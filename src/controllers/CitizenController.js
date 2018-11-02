const mongoose = require('mongoose')
const Citizen = mongoose.model('Citizen')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const citizen = await Citizen.paginate({}, {page, limit: 10})
        return res.json(citizen)
    },

    async store(req, res) {
        const citizen = await Citizen.create(req.body)
        return res.json(citizen)
    },

    async show(req, res) {
        const citizen = await Citizen.findById(req.params.id)
        return res.json(citizen)
    },

    async update(req, res) {
        // Putting the 'new' Object property, the new content will be insert on the variable, otherwise the 'product' variable will has the older content
        const citizen = await Citizen.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(citizen)
    },

    async destroy(req, res) {
        const citizen = await Citizen.findByIdAndDelete(req.params.id)
        return res.send()
    }
}