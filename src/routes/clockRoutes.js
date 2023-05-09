const express = require('express')
const router = express.Router()

const ClockController = require('../controllers/clockController')

router.get('/:hour/:minute',ClockController.getAngle)
router.get('/:hour',ClockController.getAngle)

module.exports = router
