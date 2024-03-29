const Accessory = require('../models/Accessory')

exports.create = (accessoryData) => Accessory.create(accessoryData)

exports.getAll = () => Accessory.find()

exports.getRest = (accessoryIds) => Accessory.find({_id: {$nin: accessoryIds}})