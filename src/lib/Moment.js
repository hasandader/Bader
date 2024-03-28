import { I18nManager } from 'react-native';
import moment from 'moment'

let momentInstance = moment

const arLocale = require('moment/locale/ar-sa')
const enLocal = require('moment/locale/en-nz')

if (I18nManager.isRTL) {
    // momentInstance.updateLocale('ar-sa', arLocale)
    momentInstance.updateLocale('en', enLocal)
} else {
    momentInstance.updateLocale('en', enLocal)
}


export default momentInstance
