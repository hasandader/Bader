import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../../lib/utility';

export default StyleSheet.create({
    cardContainer: {
        width: deviceWidth() * 0.92,
        borderRadius: 8,
        backgroundColor: primaryColors.white,
        alignSelf: 'center',
        paddingTop: deviceHeight() * 0.017,
        paddingBottom: deviceHeight() * 0.027,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,

        elevation: 2,
    },
    row: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: deviceWidth() * 0.038,
        paddingLeft: deviceWidth() * 0.038,
    },
    updatedRow: {
        justifyContent: 'space-between',
        marginTop: deviceHeight() * 0.017
    },
    iconWraper: {
        width: 44,
        height: 44,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.031,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.031 : 0,
    },
    iconGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    mainIcon: {
        width: 18.7,
        height: 26.7,
        tintColor: primaryColors.white
    },
    title: {
        fontFamily: fonts.medium,
        fontSize: 20,
        color: primaryColors.eclipse,
        width: '85%',
        textAlign: I18nManager.isRTL ? 'left' : 'right'
    },
    addressAlignment: {
        marginTop: deviceHeight() * 0.017,
    },
    address: {
        fontFamily: fonts.regular,
        fontSize: 20,
        color: primaryColors.eclipse,
        lineHeight: 24,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.09,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.09 : 0,
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
    sideIcons: {
        width: 45,
        height: 45
    },
    rectangle: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
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
        justifyContent: 'center',
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.024,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.024 : 0
    },
    dateCircle: {
        backgroundColor: primaryColors.kaitoke
    },
    numbers: {
        fontFamily: fonts.bold,
        color: primaryColors.white,
        paddingTop: 4,
    },
    subTitle: {
        fontFamily: fonts.bold,
        lineHeight: 20,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
    },
    calenderIcon: {
        width: 14,
        height: 14
    },
    rowItems: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: deviceWidth() * 0.01,
        paddingLeft: deviceWidth() * 0.01,
    },
    halfRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    infoAlignment: {
        justifyContent: 'center'
    },
    sideTitle: {
        paddingRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.028,
        paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.028 : 0
    },
    sideIcon: {
        width: 27,
        height: 27,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.057,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.057 : 0
    },
    mainRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: deviceWidth() * 0.038,
    },
    chartIcon: {
        width: 31,
        height: 31,
        tintColor: primaryColors.white
    },
    circleBtnWraper: {
        width: 174,
        height: 174,
        backgroundColor: primaryColors.gallery,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: primaryColors.jacarta,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCenter: {
        width: 124,
        height: 124,
        backgroundColor: primaryColors.white,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lastCardDivider: {
        width: deviceWidth() * 0.76,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: primaryColors.approxHawkesBlue,
        marginTop: deviceHeight() * 0.011,
        marginBottom: deviceHeight() * 0.0094
    },
    btnWraper: {
        flex: 1,
        justifyContent: 'center',
    },
    linkWraper: {
        marginRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.04,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.04 : 0,
        marginTop: deviceHeight() * 0.023,
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
    }
})