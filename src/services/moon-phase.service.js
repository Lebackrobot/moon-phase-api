import utils from '../utils/utils.js'
import moment from 'moment'

const moonPhaseService = {
    getMoonPhase: (date) => {
        const dateBase = moment('2023-03-21')
        return (Math.abs(dateBase.diff(moment(date), 'days')) / utils.synodicMoon) % 1
    },

    getPhaseMoonName: (phase) => {
        switch (true) {
            case phase < 0.0625 || phase >= 0.9375:
                return '🌑 New Moon';

            case phase < 0.1875:
                return '🌒 Waxing Crescent';

            case phase < 0.3125:
                return '🌓 First Quarter';

            case phase < 0.4375:
                return '🌔 Waxing Gibbous';

            case phase < 0.5625:
                return '🌕 Full Moon';

            case phase < 0.6875:
                return '🌖 Waning Gibbous';

            case phase < 0.8125:
                return '🌗 Third Quarter';

            default:
                return '🌘 Waning Crescent';
        }
    }
}

export default moonPhaseService