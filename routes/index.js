const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('path reached')
// })
router.use('/api', require('./api/index'))

module.exports = router