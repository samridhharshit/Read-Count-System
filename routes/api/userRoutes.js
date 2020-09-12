const AddUser = require('./controller/addUser')
const getUser = require('./controller/getUser')
const VerifyUser = require('./controller/verifyUser')

const express = require('express')
const router = express.Router()

router.post('/login', async (req, res) => {res.send(await VerifyUser(req.body))})
router.post('/signup', async (req, res) => {res.send(await AddUser(req.body))})
router.get('/:hash', async (req, res) => res.send(await getUser(req.params.hash)))

module.exports = router