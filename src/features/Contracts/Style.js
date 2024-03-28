import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: deviceHeight() * 0.089,
        backgroundColor: primaryColors.athensGray,
        // paddingTop: deviceHeight() <= 700 ? 122 : 140,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -25,
        paddingTop: 1
    },
    searchArea: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-evenly',
        zIndex: 1
    },
    searchInput: {
        alignSelf: 'center',
        borderBottomWidth: 0,
        width: '45%',
        height: 40,
        backgroundColor: primaryColors.white,
        borderRadius: 8,
        paddingLeft: deviceWidth() * 0.038,
        zIndex: 1
    },
    filterBtn: {
        width: '45%',
        height: 40,
        backgroundColor: primaryColors.white
    },
    filterTxt: {
        color: primaryColors.fuchsiaPink,
        fontFamily: fonts.medium
    },
    closeIcon: {
        width: 25,
        height: 25,
        tintColor: primaryColors.treePoppy
    },
    inputText: {
        fontFamily: fonts.regular,
        fontSize: 18,
        textAlign: 'right',
        paddingRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.038,
        paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.038 : 0,
    },
    flatListContainer: {
        paddingTop: 10,
        paddingBottom: 35
    },
    flatList: {
        height: '100%',
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
    iconGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    mainIcon: {
        width: 30,
        height: 30,
        tintColor: primaryColors.white
    },
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
    sideIcon: {
        width: 25,
        height: 25,
        tintColor: primaryColors.treePoppy,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.02,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.02 : 0
    },
    sideIcon2: {
        width: 45,
        height: 45,
        marginRight: -3
    },
    largeSideIcon: {
        width: 45,
        height: 45,
        tintColor: primaryColors.treePoppy,
        // marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.02,
        // marginRight: I18nManager.isRTL ? deviceWidth() * 0.02 : 0,
        resizeMode: 'contain'
    },
    icons: {
        width: 40,
        height: 40,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.024 : deviceWidth() * 0.053,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.053 : deviceWidth() * 0.024,
        resizeMode: 'contain'
    },
    updatedSideIcon: {
        resizeMode: 'contain',
        height: 30
    },
    iconStyle: {
        width: 28,
        height: 40,
        tintColor: primaryColors.treePoppy,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.024 : deviceWidth() * 0.015,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.015 : deviceWidth() * 0.024,
    },
    rowStyle: {
        marginTop: deviceHeight() * 0.013,
        paddingRight: I18nManager.isRTL ? deviceWidth() * 0.04 : deviceWidth() * 0.015,
        paddingLeft: deviceWidth() * 0.085
    },
    rowBottom: {
        marginBottom: 8
    },
    infoWraper: {
        justifyContent: 'flex-start'
    },
    cardStyle: {
        marginBottom: deviceHeight() * 0.01
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    updatedRow: {
        justifyContent: 'space-between',
        marginTop: deviceHeight() * 0.017
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
    upgradedRow: {
        width: '15%',
        borderWidth: 0,
        flex: 1
    },
    titlePartStyle: {
        borderWidth: 0,
        width: '40%',
        paddingRight: 0,
        paddingLeft: 0
    },
    dateStyle: {
        borderWidth: 0,
    },
    paymentsRow: {
        justifyContent: 'space-between',
        paddingLeft: deviceWidth() * 0.072,
    },
    chartIcon: {
        width: 31,
        height: 31,
        tintColor: primaryColors.white
    },
    listWraper: {
        marginTop: 35
    },
    horizontalFlatlist: {
        // marginTop: deviceHeight() * 0.011,
        paddingBottom: deviceHeight() * 0.017,
        paddingLeft: deviceWidth() * 0.036,
        paddingRight: deviceWidth() * 0.036
    },
    updatedFlatList: {
        marginTop: deviceHeight() * 0.015,
        paddingBottom: '12%'
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },
    paymentsList: {
        marginBottom: deviceHeight() * 0.05
    },
    virticalCards: {
        marginBottom: deviceHeight() * 0.017
    },
    padding: {
        paddingLeft: 0,
        paddingRight: 0
    },
    activityIndicator: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '50%',
    },
    titleStyle: {
        width: deviceWidth() * 0.41,
        textAlign: I18nManager.isRTL ? 'left' : 'right'
    },
    sideTitleStyle: {
        textAlign: I18nManager.isRTL ? 'left' : 'right'
    }
})