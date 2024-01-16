const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const path = require('path')
const expressConfig = require('./config/expressCongfig')

const PORT = 5000

expressConfig(app)

//Handlebars config

app.engine('hbs', handlebars.engine({
    extname: "hbs"
}))

app.set('view engine', 'hbs')
app.set('views', "src/views")


//Routes

app.get('/', (req,res) =>{
    res.render('index')
})

app.listen(PORT, ()=> {console.log(`Server is running on port ${PORT}...`)})