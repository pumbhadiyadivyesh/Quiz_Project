const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserData = new Schema({
    name:String,
    Email:String,
    password:String,
})
const USER = mongoose.model('userModel',UserData)
module.exports = USER