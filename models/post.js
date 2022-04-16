const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    Name: String,
    FatherName: String,
    DOB: String,
    Contact: Number,
    Email: String,
    Gander: String,
    Skills: String,
    bio: String,
    level: String,
    Degree: String,
    Resume: String
})

const compSchema = new mongoose.Schema({
    Name: String,
    About: String,
    Location: String,
    Field: String,
    Contact: Number,
    Email: String
})

const jobSchema = new mongoose.Schema({
    Title: String,
    Desc: String,
    WorkplaceType: String,
    JobType: String,
    Salary: Number,
    __metadata: {
        PostedBY: String,
        Date: String
    }
})

// const Application = new mongoose.Schema({
//     stuId: String,
//     ApplliedFor: String  
// })


const Student = mongoose.model("Student", studentSchema);
const Company = mongoose.model("Company", compSchema);
const Job = mongoose.model("Jobs", jobSchema);
module.exports = {
    Student, Company, Job
}
