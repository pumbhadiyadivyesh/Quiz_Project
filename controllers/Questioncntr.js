const Question = require("../model/Question")
const User = require('../model/UserAnswer')
exports.AddQuestion = async function (req, res, next) {
    try {
      if (!req.body.Question || !req.body.Catagory ) {
        throw new Error("fielp all data")
      }
      let data = await Question.create(req.body)
      res.status(201).json({
        message: "Created",
        data: data
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }
  
exports.GetQuestion = async function (req, res, next) {
    try {
      let data = await Question.find().populate('Catagory')
      res.status(202).json({
        message: "All data find",
        data: data
      })
    }
  
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }  
exports.deleteQuestion = async function (req, res, next) {
    try {
      await Question.findByIdAndDelete(req.query.id)
      res.status(201).json({
        message: "Data Delete"
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }

exports.UpdateQuestion = async function (req, res, next) {
    try {
       await Question.findByIdAndUpdate(req.query.id, req.body)
       res.status(200).json({
         message: "Data Update"
       })
       
     } catch (error) {
       res.status(404).json({
         message: error.message
       })
     }
   }