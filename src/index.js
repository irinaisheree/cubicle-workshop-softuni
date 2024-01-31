const express = require('express')

const dbConnect = require('./config/mongooseConfig')
const app = express()

const mongoose = require('mongoose')

const expressConfig = require('./config/expressCongfig')
const handlebarsConfig = require('./config/handlebarsConfig') 

const routes = require('./routes')


const PORT = 5000



dbConnect()
.then(() => {
    console.log('DB connected successfully')
    expressConfig(app)
    handlebarsConfig(app)
    app.use(routes)

app.listen(PORT, ()=> {console.log(`Server is running on port ${PORT}...`)})
})
.catch(err => {
    console.log('DB error: ', err)
})



