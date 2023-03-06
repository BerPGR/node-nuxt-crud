const router = require('express').Router()
const Car = require('../models/Car')

router.get('/', async (req, res) => {
    const cars = await Car.find({})

    if(!cars) {
        res.send({message: 'There are no cars in the database'})
        return
    }

    res.send(cars)
})

router.post('/', async (req, res) => {
    const { marca, modelo, ano } = req.body

    const car = {
        marca, modelo, ano
    }

    try {
        await Car.create(car)
        console.log('Car criado')
    }
    catch(e) {
        console.log(e)
    }
})


module.exports = router;