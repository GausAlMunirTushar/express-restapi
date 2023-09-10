const express = require('express')
const testRoutes = require('./src/routes/testRoutes')
const app = express()

// Security Middleware Import
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const connectDB = require('./src/config/database');


// Security Middleware Implementation
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());


// Request Rate Limiting
const limiter = rateLimit({
    windowMs : 15 * 60 * 1000,// 15 minutes
    max : 100// limit each IP to 100 requests per windowMs
})
app.use(limiter);
// Database Connection 
connectDB()
app.use('/api/v1', testRoutes)

// undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: "fail",
        data: "Not Found"
    })
})
module.exports = app;