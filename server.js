const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const carRoutes = require('./api/routes/carRoutes')
const { loadNuxt, build } = require('nuxt')
const isDev = process.env.NODE_ENV !== 'production'

const app = express()

app.use(urlencoded({
    extended: true
}))

app.use(express.json())

app.use('/cars', carRoutes)

mongoose.connect(`mongodb+srv://be_polaco:nkQUHGSonci5T807@cruds.ubw12ps.mongodb.net/db1?retryWrites=true&w=majority`)
.then(async() => {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    app.use(nuxt.render)
    if (isDev) {
        build(nuxt)
    }
    console.log('Conectado ao mongodb')
    app.listen(3000)
})
.catch((error) => {
    console.log(error)
})