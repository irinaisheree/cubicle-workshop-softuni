const express = require('express')
const path = require('path')

function expressConfig(app){
    //Express config
app.use(express.static(path.resolve(__dirname, '../public')))
}

module.exports = expressConfig