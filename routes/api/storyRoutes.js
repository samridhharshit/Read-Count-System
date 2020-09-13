const showStory = require('./controller/showStory')
const showStoryCollection = require('./controller/showStoryCollection')
// const getUserCountsForStory = require('./controller/getUserCountsForStory')

const express = require('express')
const router = express.Router()

router.get('/getStory/:userId/:storyId', async (req, res) => {res.send(await showStory(req.params.userId, req.params.storyId))})
router.get('/collection', async (req, res) => {res.send(await showStoryCollection())})
// router.get('/userCountForStory/:storyId', async (req, res) => {res.send(await getUserCountsForStory(req.params.storyId))})

module.exports = router