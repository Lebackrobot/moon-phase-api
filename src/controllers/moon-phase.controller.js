
import moment from 'moment'
import utils from '../utils/utils.js'
import moonPhaseService from '../services/moon-phase.service.js'


const moonPhaseController = {
    getMoonPhase: async (req, res) => {
        try {
            const { date } = req.query

            // No date query
            if (!date) {
                res.status(400).json({ success: false, message: utils.message.err.missingDate })
            }

            // Wrong date query
            else if (!moment(date).isValid()) {
                res.status(400).json({ success: false, message: utils.message.err.invalidDate })
            }

            // Date query is ok
            else {
                const phaseMoon = moonPhaseService.getMoonPhase(date)
                const phaseMoonName = moonPhaseService.getPhaseMoonName(phaseMoon)
                res.status(200).json({ success: true, info: phaseMoonName, message: utils.message.success.standart })
            }
        }

        catch (err) {
            console.error(err)
            res.status(500).json({ success: false, err: utils.message.err.standart })
        }
    } 
}

export default moonPhaseController