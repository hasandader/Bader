import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: deviceHeight() * 0.089,
        backgroundColor: primaryColors.athensGray,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -25,
        paddingTop: 1,
    },
    flatListContainer: {
        paddingTop: 10,
        paddingBottom: 35
    },
    row: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: deviceWidth() * 0.038,
        paddingLeft: deviceWidth() * 0.038,
    },
    title: {
        fontFamily: fonts.medium,
        fontSize: 20,
        lineHeight: 22,
        color: primaryColors.eclipse,
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
    chartIcon: {
        width: 31,
        height: 31,
        tintColor: primaryColors.white
    },
    divider: {
        width: deviceWidth() * 0.76,
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: primaryColors.approxHawkesBlue,
        marginTop: deviceHeight() * 0.011
    },
    rectangle: {
        // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth() * 0.29,
        height: 35,
        borderRadius: 5,
        paddingRight: deviceWidth() * 0.01,
        paddingLeft: deviceWidth() * 0.02,
        backgroundColor: primaryColors.zumthor,
        marginTop: deviceHeight() * 0.014,
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: primaryColors.white,
        backgroundColor: primaryColors.redOrange,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    dateCircle: {
        backgroundColor: primaryColors.kaitoke
    },
    calenderIcon: {
        width: 13,
        height: 13,
    },
    btnWraper: {
        justifyContent: 'flex-end'
    },
    button: {
        width: deviceWidth() * 0.17,
        height: 35,
        borderRadius: 5,
        backgroundColor: primaryColors.malachite,
    },
    btnTitle: {
        fontFamily: fonts.bold,
        fontSize: 15
    },
    datesView: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        paddingRight: deviceWidth() * 0.048,
        paddingLeft: deviceWidth() * 0.04,
        marginTop: deviceHeight() * 0.009,
        marginBottom: deviceHeight() * 0.013
    },
    datesWraper: {
        alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end'
    },
    textWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth() * 0.1,
        marginTop: deviceHeight() * 0.018
    },
    titleDesc: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 9
    },
    smallCircle: {
        width: 10,
        height: 10,
        backgroundColor: primaryColors.chateauGreen,
        borderRadius: 10,
        marginLeft: 6
    },
    detailsShadow: {
        shadowColor: "#290000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.00,

        elevation: 4,
    },
    detailsCard: {
        marginBottom: 6,
        width: '90%'
    },
    detailsView: {
        paddingRight: deviceWidth() * 0.024,
        paddingLeft: deviceWidth() * 0.031,
        paddingTop: deviceHeight() * 0.01
    },
    cardMargins: {
        marginBottom: deviceHeight() * 0.012
    },
    descWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between'
    },
    statistics: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        marginTop: deviceHeight() * 0.015
    },
    numberMargins: {
        marginRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.04,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.04 : 0
    },
    activityIndicator: {
        backgroundColor: primaryColors.white,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '20%',
    },
    textBtn: {
        backgroundColor: 'transparent',
        width: null,
        height: null,
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: deviceWidth() * 0.05,
        marginTop: 10
    },
    btnTxt: {
        color: primaryColors.treePoppy,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    dropDown: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '91%',
        height: 40,
        backgroundColor: primaryColors.zumthor,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15
    },
    sideTitleWraper: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        backgroundColor: primaryColors.alabaster,
        width: deviceWidth() * 0.8,
        height: 38,
        borderRadius: 8,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 17,
        paddingRight: 14,
        paddingLeft: 14
    },
    mainIcon: {
        width: 30,
        height: 30,
        tintColor: primaryColors.white
    },
    largeSideIcon: {
        width: 45,
        height: 45,
        tintColor: primaryColors.treePoppy,
        resizeMode: 'contain'
    },
    cardStyle: {
        marginBottom: deviceHeight() * 0.01
    },
    sideIcon: {
        width: 45,
        height: 45,
    },
    text: {
        textAlign: 'right',
        marginRight: deviceWidth() * 0.08,
        marginBottom: deviceHeight() * 0.015
    },
    dateRow: {
        justifyContent: 'space-between',
        paddingRight: deviceWidth() * 0.05,
        paddingLeft: deviceWidth() * 0.05,
    },
    dateRectangle: {
        backgroundColor: primaryColors.zumthor,
        marginTop: deviceHeight() * 0.014,
        paddingLeft: deviceWidth() * 0.053,
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },
    rectangle1: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth() * 0.38,
        height: 40,
        borderRadius: 5,
        paddingRight: deviceWidth() * 0.024,
        paddingLeft: deviceWidth() * 0.031,
        backgroundColor: primaryColors.approxWhiteSmoke
    },
    dropdownList: {
        // backgroundColor: primaryColors.zumthor,
        width: '91%',
        alignSelf: 'center',
        marginTop: 1,
        paddingBottom: 5
    },
    listItem: {
        borderBottomWidth: 1,
        borderBottomColor: primaryColors.spindle,
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,
        backgroundColor: primaryColors.zumthor,
    },
    lastItem: {
        borderBottomWidth: 0,
        height: 40,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    }
})