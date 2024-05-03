const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AdminData = new Schema({
    name:String,
    Email:String,
    password:String
})
const ADMIN = mongoose.model('User',AdminData)
module.exports = ADMIN