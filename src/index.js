const express = require('express')
const app = express()

const expressConfig = require('./config/expressCongfig')
const handlebarsConfig = require('./config/handlebarsConfig') 

const routes = require('./routes')


const PORT = 5000

expressConfig(app)
handlebarsConfig(app)

app.use(routes)




app.listen(PORT, ()=> {console.log(`Server is running on port ${PORT}...`)})