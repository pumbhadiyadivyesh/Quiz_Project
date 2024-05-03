const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatagoryData = new Schema ({
    question_type:{
        type:String,
        required:true
    },
})
const CATAGORY = mongoose.model('Question_Catagory',CatagoryData)
module.exports = CATAGORY