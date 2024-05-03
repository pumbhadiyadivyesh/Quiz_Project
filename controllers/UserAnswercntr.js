const USERANSWER = require("../model/UserAnswer");
const { findOne } = require("../model/userModel");
const Question = require('../model/Question');

exports.AddUSERANSWER = async function (req, res, next) {
  try {
    if (!req.body.answer || !req.body.Userid) {
      throw new Error("Please provide answer, userId, and questionId");
    }

    let data = await USERANSWER.create(req.body);
    res.status(201).json({
      message: "Created",
      data: data
    });
  }
  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.GetUSERANSWER = async function (req, res, next) {
  try {
    let data = await USERANSWER.find().populate('Userid')
    res.status(202).json({
      message: "All Data Find",
      data: data
    })
  }

  catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.deleteUSERANSWER = async function (req, res, next) {
  try {
    await USERANSWER.findByIdAndDelete(req.query.id)
    res.status(201).json({
      message: "Data Delete"
    })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })

  }
}

exports.UpdateUSERANSWER = async function (req, res, next) {
  try {
    await USERANSWER.findByIdAndUpdate(req.query.id, req.body)
    res.status(200).json({
      message: "Data Update"
    })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}
