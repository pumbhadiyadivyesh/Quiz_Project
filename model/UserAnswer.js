const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserAnswerData = new Schema({
   answer:{
    type:String,
    required:true
   },
   Userid:{
      type:Schema.Types.ObjectId,
      ref:'userModel'
   }
})
const USERANSWER = mongoose.model('UserAnswer',UserAnswerData)
module.exports = USERANSWER