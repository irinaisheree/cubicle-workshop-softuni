const { addListener } = require('nodemon')
const uniqid = require('uniqid')
const Cube = require('../models/Cube')

exports.getAll = async(search, from, to) => {
    let result = await Cube.find().lean()

    //todo use mongoose to filter in DB
    if(search){

        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result
}

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories')
exports.create =  (cubeData) => {
     
    const cube = new Cube(cubeData)
    return cube.save() 
}

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData)
exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)

exports.attachAcessory = (cubeId, accessoryId) => {
    return Cube.findByIdAndUpdate(cubeId, {$push:{accessories: accessoryId}})
    //const cube = await Cube.findById(cubeId);
    //cube.accessories.push(accessoryId)
    //return cube.save()
}