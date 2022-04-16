const { Student, Company, Job } = require('../models/post')

exports.getStudent = (req, res) => {
    posts = Student.find().select("_id Name")
        .then(posts => {
            res.json({ posts })
        })
}

exports.getCompany = (req, res) => {
    posts = Company.find().select("_id Name")
        .then(posts => {
            res.json({ posts })
        })
}

exports.getJobs = (req, res) => {
    posts = Job.find().select("_id Name")
        .then(posts => {
            res.json({ posts })
        })
}