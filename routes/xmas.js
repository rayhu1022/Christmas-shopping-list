const express = require('express')
const router = express.Router()
const xmasController = require('../controllers/xmas')

router.get('/', xmasController.getGifts)
router.post('/createGift', xmasController.createGift)
router.put('/markComplete', xmasController.markComplete)

module.exports = router