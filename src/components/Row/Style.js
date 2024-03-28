import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts, secondaryFonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    rowItems: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: deviceWidth() * 0.01,
    },
    halfRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    infoAlignment: {
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'flex-start',
        // right: 20
    },
    sideTitle: {
        paddingRight: deviceWidth() * 0.028,
        // paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.028 : 0
    },
    row: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: deviceWidth() * 0.038,
        paddingLeft: deviceWidth() * 0.038,
    },
    dateRow: {
        justifyContent: 'space-between',
        paddingRight: deviceWidth() * 0.05,
        paddingLeft: deviceWidth() * 0.05,
    },
    rectangle: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth() * 0.29,
        height: 30,
        borderRadius: 5,
        paddingRight: deviceWidth() * 0.024,
        paddingLeft: deviceWidth() * 0.031,
        backgroundColor: primaryColors.approxWhiteSmoke
    },
    dateRectangle: {
        backgroundColor: primaryColors.zumthor,
        marginTop: deviceHeight() * 0.014,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: primaryColors.white,
        backgroundColor: primaryColors.redOrange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateCircle: {
        backgroundColor: primaryColors.kaitoke
    },
    calenderIcon: {
        width: 10,
        height: 10
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },
    title: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        borderWidth: 0
    }
});
