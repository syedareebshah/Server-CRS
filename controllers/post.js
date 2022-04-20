const { Student, Company, Job, Flag } = require('../models/post')
const mongoose = require('mongoose')

exports.upload = async (req, res) => {
    const id = mongoose.Types.ObjectId("625f1d36ebbcb010ee5abc70")
    console.log(id);
    const dp = req.file.filename
    try {
        const updateStudent = await Student.findByIdAndUpdate(id, {
            dp
        }, { new: true });
        res.status(200).json(updateStudent);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.uploadCv = async (req, res) => {
    const id = mongoose.Types.ObjectId("625f1d36ebbcb010ee5abc70")
    console.log(id);
    const resume = req.file.filename
    try {
        const updateStudent = await Student.findByIdAndUpdate(id, {
            resume
        }, { new: true });
        res.status(200).json(updateStudent);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}



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


exports.createComp = async (req, res) => {
    const logo = req.file.filename;
    console.log("Creating Post", req.body, req);
    const post = new Company({ ...req.body, logo });
    try {
        await post.save();
        res.status(200).json(post);

    }
    catch (err) {
        console.log(err.message);
    }
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

exports.createApplications = async (req, res) => {
    const id = mongoose.Types.ObjectId("625ffe34c6985e92e60d1f99")
    console.log(req.body)
    const _applications = req.body
    try {
        const updateApplication = await Job.updateOne(
            { _id: id },
            { $push: { _applications } }
        );
        res.status(200).json(updateApplication);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}


exports.createAppliedJobs = async (req, res) => {
    const id = mongoose.Types.ObjectId("625ffbf10d8031c7071d4f4f")
    console.log(req.body)
    const appliedJobs = req.body
    try {
        const updateAppliedJob = await Student.updateOne(
            { _id: id },
            { $push: { appliedJobs } }
        );
        res.status(200).json(updateAppliedJob);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}



exports.createFlag = (req, res) => {
    const id = mongoose.Types.ObjectId("625ffbf10d8031c7071d4f4f")
    const post = new Flag(req.body);
    console.log("Creating Post", req.body);

    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}

exports.delFlag = async (req, res) => {

    const id = mongoose.Types.ObjectId(req.body)
    try {
        const post = new Flag(req.body);
        console.log("Creating Post", req.body, id);
        post.deleteOne("62604fb4c2f4a6494559370b")
        res.status(200).json(post);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }

}





