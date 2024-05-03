var express = require('express');
var router = express.Router();
const ADMINcntrs = require('../controllers/Admincntr')
const QUESTIONcntrs = require('../controllers/Questioncntr')
const QuestionCatagorycntr = require('../controllers/QusnCatagorycntr')
const USERcntr = require('../controllers/Usercntr')
const USERANSWERcntr = require('../controllers/UserAnswercntr')
/* GET home page. */


//ADMIN SIGNUP AND LOGIN
router.post('/signpAdmin',ADMINcntrs.signpAdmin)
router.post('/loginAdmin',ADMINcntrs.loginAdmin)

//ADMIN ASK QUESTION
router.post('/AddQuestion',ADMINcntrs.SECURE,QUESTIONcntrs.AddQuestion)
router.get('/Getcatagories',ADMINcntrs.SECURE,QUESTIONcntrs.GetQuestion)
router.delete('/deleteQuestion',ADMINcntrs.SECURE,QUESTIONcntrs.deleteQuestion)
router.put('/UpdateQuestion',ADMINcntrs.SECURE,QUESTIONcntrs.UpdateQuestion)

//WHICH TYPE CATAGORY QUESTION 
router.post('/AddCATAGORY',QuestionCatagorycntr.AddCATAGORY)
router.get('/Getcatagories',QuestionCatagorycntr.Getcatagories)
router.delete('/Deletcatagories',QuestionCatagorycntr.Deletcatagories)
router.put('/Deletcatagories',QuestionCatagorycntr.Updatescatagories)

//USER SIGNUP AND LOGIN
router.post('/signpUser',USERcntr.signpUser)
router.post('/loginUser',USERcntr.loginUser)

//USERANSWER
router.post('/AddUSERANSWER',USERcntr.Securety,USERANSWERcntr.AddUSERANSWER)
router.get('/GetUSERANSWER',ADMINcntrs.SECURE,USERANSWERcntr.GetUSERANSWER)
router.delete('/deleteUSERANSWER',ADMINcntrs.SECURE,USERANSWERcntr.deleteUSERANSWER)
// router.put('/UpdateUSERANSWER',USERANSWERcntr.UpdateUSERANSWER)





module.exports = router;
