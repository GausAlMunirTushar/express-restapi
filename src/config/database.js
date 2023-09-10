const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Database Connection Success')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB;