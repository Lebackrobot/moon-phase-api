import express from 'express'
import moonPhaseController from '../../controllers/moon-phase.controller.js'

const router = express.Router()
router.get('/', moonPhaseController.getMoonPhase)

export default router
