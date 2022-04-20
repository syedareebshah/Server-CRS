const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    Name: String,
    FatherName: String,
    DOB: String,
    Contact: String,
    Email: String,
    Gander: String,
    Skills: String,
    bio: String,
    level: String,
    Degree: String,
    dp: String,
    resume: String,
    appliedJobs: [String]
})

const compSchema = new mongoose.Schema({
    Name: String,
    About: String,
    Location: String,
    Field: String,
    Contact: Number,
    Email: String,
    logo: String
})

const jobSchema = new mongoose.Schema({
    Title: String,
    Desc: String,
    WorkplaceType: String,
    JobType: String,
    Salary: Number,
    _metadata: {
        PostedBY: String,
        Date: String
    },
    _applications: Array
})

const FlagSchema = new mongoose.Schema({
    user: String,
    flag: String
})





const Student = mongoose.model("Student", studentSchema);
const Company = mongoose.model("Company", compSchema);
const Job = mongoose.model("Jobs", jobSchema);
const Flag = mongoose.model("flag", FlagSchema);
module.exports = {
    Student, Company, Job, Flag
}
