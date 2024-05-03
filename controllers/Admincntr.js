const Admin = require("../model/Admin")
var jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');


exports.SECURE = async function (req, res, next) {
  try {
    const token = req.headers.authorization
    if(!token)
    {
      throw new Error("Please Attached Token")
    }
    let tokenData = jwt.verify(token,"Divyesh")
    console.log(tokenData.id);
    let checkAdmin = await Admin.findById(tokenData.id)
    if (!checkAdmin) {
      throw new Error("Admin not found")
    }
    next()
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

exports.signpAdmin = async function (req, res, next) {
    try {
      let singup = req.body
      if (!singup.name || !singup.Email || !singup.password) {
        throw new Error("field all data")
      }
      singup.password = await bcrypt.hash(singup.password, 10)
      let data = await Admin.create(req.body)
      var token = jwt.sign({ id: data._id }, 'Divyesh');
      res.status(200).json({
        message: "Signup successe",
        data,
        token
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }
  
exports.loginAdmin = async function (req, res, next) {
    try {
  
      let logindata = req.body
      if (!logindata.Email || !logindata.password) {
        throw new Error("Field all data")
      }
      const checkAdmin = await Admin.findOne({ Email: logindata.Email })
      if (!checkAdmin) {
        throw new Error("Email wrong")
      }
      let checkpass = await bcrypt.compare(logindata.password, checkAdmin.password)
      if (!checkpass) {
        throw new Error("Wrong password")
      }
      res.status(200).json({
        message: "Success Login",
        data: checkAdmin
      })
  
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  }  