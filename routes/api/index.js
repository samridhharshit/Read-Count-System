const express = require('express')
const router = express.Router()
const db = require('../../database/models/index')
const users = require('../../database/models/container/User')
const stories = require('../../database/models/container/story')
const history = require('../../database/models/container/history')

router.use('/user', require('./userRoutes'))
router.use('/story', require('./storyRoutes'))

module.exports = router