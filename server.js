const express = require('express')
const app = express()

const appRoutes = require('./routes/appRoutes')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen('2000', ()=>{
    console.log('serveur en marche sur le port 2000')
})

app.use(appRoutes)





