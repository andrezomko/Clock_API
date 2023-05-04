const express = require('express')
const router = express.Router()

const ClockController = require('../controllers/clockController')

router.get('/:hour/:minute',ClockController.getAngle)

module.exports = router
