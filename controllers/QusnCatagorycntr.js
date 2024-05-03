const CATAGORY = require('../model/Question_Catagory')

exports.AddCATAGORY =  async function (req, res, next) {
    try {
      console.log(req.body);
      if (!req.body.question_type) {
        throw new Error("fielp all data")
      }
      let data = await CATAGORY.create(req.body)
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

exports.Getcatagories =  async function (req, res, next) {
    try {
      let data = await CATAGORY.find()
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

exports.Deletcatagories = async function (req, res, next) {
    try {
      await CATAGORY.findByIdAndDelete(req.query.id)
      res.status(200).json({
        message: "Data Delete"
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }

exports.Updatescatagories = async function (req, res, next) {

    try {
      await CATAGORY.findByIdAndUpdate(req.query.id, req.body)
      res.status(200).json({
        message: "Data Update"
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
  
    }
  }