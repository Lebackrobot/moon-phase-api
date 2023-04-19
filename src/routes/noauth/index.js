import express from 'express'

const router = express.Router()

import moonPhase from './moon-phase.js'
router.use('/moon-phase', moonPhase)

export default router