const express = require('express');
const router = express.Router();
const postController = require('../controllers/post')
const getController = require('../controllers/get')
const validator = require('../validations')

router.get('/getStudents', getController.getStudent )
router.get('/getComp', getController.getCompany )
router.get('/getComp', getController.getJobs )
router.post('/postStudent', postController.createStudent)
router.post('/postComp', postController.createComp)
router.post('/postJob', postController.createJob)
// router.post('/post', validator.createPostValidators, postController.createStudent)


module.exports = router

