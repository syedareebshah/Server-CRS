const { Student, Company, Job } = require('../models/post')


exports.createStudent = (req, res) => {
    const post = new Student(req.body);
    console.log("Creating Post", req.body);
    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({
    //             err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // })
    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}


exports.createComp = (req, res) => {
    const post = new Company(req.body);
    console.log("Creating Post", req.body);

    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}



exports.createJob = (req, res) => {
    const post = new Job(req.body);
    console.log("Creating Post", req.body);

    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}


