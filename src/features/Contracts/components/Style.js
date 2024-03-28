import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../../lib/utility';

export default StyleSheet.create({
    mainRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: deviceWidth() * 0.086,
    },
    divider: {
        width: deviceWidth() * 0.76,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: primaryColors.approxHawkesBlue,
        marginTop: deviceHeight() * 0.018
    },
    updatedDivider: {
        marginTop: deviceHeight() * 0.011
    },
    dividerBottom: {
        marginBottom: deviceHeight() * 0.011
    },
    iconGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
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
    title: {
        fontFamily: fonts.medium,
        fontSize: 20,
        color: primaryColors.eclipse
    },
    iconWraper: {
        width: 44,
        height: 44,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.031,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.031 : 0,
    },
    mainIcon: {
        width: 30,
        height: 30,
        tintColor: primaryColors.white
    },
    icons: {
        width: 40,
        height: 40,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.024 : deviceWidth() * 0.02,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.02 : deviceWidth() * 0.024,
        resizeMode: 'contain'
    },
    upgradedRow: {
        width: '15%',
        borderWidth: 0,
        flex: 1
    },
    dateStyle: {
        borderWidth: 0,
    },
    largeSideIcon: {
        width: 45,
        height: 45,
        tintColor: primaryColors.treePoppy,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.02,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.02 : 0,
        resizeMode: 'contain'
    },
    rectangle: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth() * 0.38,
        height: 44,
        borderRadius: 5,
        paddingRight: deviceWidth() * 0.024,
        paddingLeft: deviceWidth() * 0.031,
        backgroundColor: primaryColors.approxWhiteSmoke
    },
    dateRectangle: {
        backgroundColor: primaryColors.zumthor,
        marginTop: deviceHeight() * 0.014,
        paddingLeft: deviceWidth() * 0.053,
    },
    circle: {
        width: 30,
        height: 30,
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
        width: 14,
        height: 14
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },

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
    },
    upgradedRow: {
        width: '15%',
        borderWidth: 0,
        flex: 1
    },
    sideTitle: {
        paddingRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.028,
        paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.028 : 0
    },
    titlePartStyle: {
        borderWidth: 0,
        width: '35%',
        paddingRight: 0,
        paddingLeft: 0
    },
    paymentsRow: {
        justifyContent: 'space-between',
        paddingLeft: deviceWidth() * 0.04,
    },
    paymentsCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: primaryColors.white,
        backgroundColor: primaryColors.redOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.012,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.012 : 0
    },
    paymentsDateCircle: {
        backgroundColor: primaryColors.kaitoke
    },
    paymentsCalenderIcon: {
        width: 10,
        height: 10
    },
    paymentsRectangle: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: deviceWidth() * 0.29,
        height: 30,
        borderRadius: 5,
        paddingRight: '1%',//deviceWidth() * 0.024,
        paddingLeft: '1%', //deviceWidth() * 0.031,
        backgroundColor: primaryColors.approxWhiteSmoke
    },
    paymentsDateRectangle: {
        backgroundColor: primaryColors.zumthor,
    },
    modalStyle: {
        flex: 1,
        height: '100%',
        zIndex: 1,
        justifyContent: 'center'
    },
})