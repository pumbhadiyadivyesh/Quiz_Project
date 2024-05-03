const User = require('../model/userModel')
var jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');


exports.Securety = async function (req, res, next) {
  try {
    let token = req.headers.Authorization
    if(!token)
    {
      throw new Error("Please Attached Token")
    }
    let tokenData = jwt.verify(token,"Divyesh")
    console.log(tokenData.id);
    let checkUser = await User.findById(tokenData.id)
    if (!checkUser) {
      throw new Error("User Not Found")
    }
    next()
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.signpUser = async function (req, res, next) {
    try {
      let singup = req.body
      if (!singup.name || !singup.Email || !singup.password) {
        throw new Error("field all data")
      }
      singup.password = await bcrypt.hash(singup.password, 10)
      let data = await User.create(req.body)
      var token = jwt.sign({ id: data._id }, 'Divyesh');
      res.status(200).json({
        message: "Signup Successe",
        data,
        token
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
  
exports.loginUser = async function (req, res, next) {
    try {
  
      let logindata = req.body
      if (!logindata.Email || !logindata.password) {
        throw new Error("Field All Data")
      }
      const checkUser = await User.findOne({ Email: logindata.Email })
      if (!checkUser) {
        throw new Error("Email Wrong")
      }
      let checkpass = await bcrypt.compare(logindata.password, checkUser.password)
      if (!checkpass) {
        throw new Error("Wrong Password")
      }
      res.status(200).json({
        message: "Success Login",
        data: checkUser
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }  