const express = require('express')
const router = express.Router()

//middleware

const openCloseServices = (req, res, next) => {

    const date = new Date()
    const toDay = date.getDay()
    const hour = date.getHours()
    
    if(toDay-1 < 4){
        if(hour >= 9 && hour <= 17){
            next()
        }
    }
    res.status(200).render('services_indisponibles.ejs', { title : 'Fermé'})
}

router.use(openCloseServices)

//routes

router.get('/', (req, res) => {
    res.status(200).render('index.ejs', { title : 'Bienvenue à GoMyCode' })
})

router.get('/services', (req, res) => {
    res.status(200).render('services.ejs', { title : 'Profitez de nos servives' })
})

router.get('/contacts', (req, res) => {
    res.status(200).render('contacts.ejs', { title : 'Rejoignez nous' })
})

router.use((req, res) => {
    res.status(404).render('404.ejs', { title : 'Erreur'})
})

module.exports = router