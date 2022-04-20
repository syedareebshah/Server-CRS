'use strict';
const express = require('express')
const morgan = require('morgan')
const path = require('path');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()



mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected..."))
mongoose.connection.on("error", (err) => {
    console.log(`error ${err.message}`);
})




const postRoutes = require('./routes/post')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', postRoutes)

const port = 3000
app.listen(port, () => {
    console.log("running...");
})