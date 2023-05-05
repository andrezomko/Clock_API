const express = require('express')
const bodyParser = require('body-parser')
const clockRoutes = require('./routes/clockRoutes')
const homeRoute = require('./routes/homeRoutes.js')

const app = express()

app.use(bodyParser.json()) //interpretar req JSON
app.use(bodyParser.urlencoded({extended:true}))//form HTML urlencoded

app.use('/', homeRoute )
app.use('/api/clock', clockRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{

    console.log(`Server is running on port ${PORT}`);
})