const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')
const getController = require('../controllers/get')
const stuUpload = require('../middleware/studUpload')
const compUpload = require('../middleware/compUpload')
const uploadCv = require('../middleware/uploadCv')


router.get('/', (req,res)=>{
    res.send("hii...!")
})
router.get('/getStudents', getController.getStudent)
router.get('/getComp', getController.getCompany)
router.get('/getJob', getController.getJobs)
router.post('/postStudent', postController.createStudent)
router.put('/appliedJobs', postController.createAppliedJobs)
router.put('/upload', stuUpload.upload.single('dp'), postController.upload)
router.put('/uploadCv', uploadCv.upload.single('resume'), postController.uploadCv)
router.post('/postComp', compUpload.upload.single('logo'), postController.createComp)
router.post('/postJob', postController.createJob)
router.put('/application', postController.createApplications)
router.post('/report', postController.createFlag)
router.delete('/delFlag', postController.delFlag)


// router.post('/post', validator.createPostValidators, postController.createStudent)


module.exports = router

