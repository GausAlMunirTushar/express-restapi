const express = require('express')
const testRoutes = require('./src/routes/testRoutes')
const app = express()

app.use('/api/v1', testRoutes)

// undefined route
app.use('*', (req, res) => {
    res.status(404).json({
        status: "fail",
        data: "Not Found"
    })
})
module.exports = app;