const express = require('express')
const router = express.Router()
const xmasController = require('../controllers/xmas')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, xmasController.getGifts)
router.post('/createGift', xmasController.createGift)
router.put('/markComplete', xmasController.markComplete)
router.put('/markIncomplete', xmasController.markIncomplete)
router.delete('/deleteGift', xmasController.deleteGift)

module.exports = router