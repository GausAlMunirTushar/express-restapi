const express = require('express')
const { hello } = require('../controllers/testController')
const testRoutes = express.Router()

testRoutes.get('/test', hello)

module.exports = testRoutes;