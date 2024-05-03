const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionData = new Schema ({
   Question: {
       type: String, 
       required: true 
      }, 
    Option1: {
       type:String,
       required:true
    },
    Option2: {
        type:String,
        required:true
     },
     Option3: {
        type:String,
        required:true
     },
     Option4: {
        type:String,
        required:true
     },  
    Catagory:{
        type:Schema.Types.ObjectId,
        ref:'Question_Catagory'
    },
    isCorrent :{
      type:String,
      required:true,
      
    }
});

let Question = mongoose.model('Question',QuestionData)
module.exports = Question