const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
    marca: String,
    modelo: String,
    ano: Number
}, {collection: 'cars'})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car