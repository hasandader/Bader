import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.athensGray,
        paddingBottom: deviceHeight() * 0.089,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -25,
        paddingTop: 1,
    },
    flatListContainer: {
        paddingBottom: 35,
        paddingTop: 10,
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
        lineHeight: 25,
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
    updatedDivider: {
        marginBottom: deviceHeight() * 0.0094
    },
    customTxt: {
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: 30,
        marginLeft: 30,
        marginTop: deviceHeight() * 0.01
    },
    bar: {
        flexDirection: 'row',
        height: 30,
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end'
    },
    secondCard: {
        marginTop: deviceHeight() * 0.012,
        marginBottom: deviceHeight() * 0.012
    },
    lineChart: {
        height: 150,
        marginTop: deviceHeight() * 0.022
    },
    textWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        paddingHorizontal: deviceWidth() * 0.07,
        marginTop: deviceHeight() * 0.05
    },
    titleDesc: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 9
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: primaryColors.chateauGreen,
        borderRadius: 10,
        marginLeft: 6
    },
    virticalBar: {
        flexDirection: 'row',
        height: 200,
        marginTop: deviceHeight() * 0.033
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
    barBottomText: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 35,
        paddingLeft: 35
    },
    largeSideIcon: {
        width: 45,
        height: 45,
        tintColor: primaryColors.treePoppy,
        resizeMode: 'contain'
    },
    updatedSideIcon: {
        resizeMode: 'contain',
        height: 30
    },
    iconStyle: {
        width: 23,
        height: 32,
        tintColor: primaryColors.treePoppy,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.024 : deviceWidth() * 0.015,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.015 : deviceWidth() * 0.024,
    },
    dateRow: {
        justifyContent: 'space-between',
        paddingRight: deviceWidth() * 0.05,
        paddingLeft: deviceWidth() * 0.05,
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
        // height: 30
    },
    dateCircle: {
        width: 26,
        height: 26,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: primaryColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryColors.kaitoke,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.024,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.024 : 0
    },
    calenderIcon: {
        width: 14,
        height: 14
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },
    mainRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: deviceWidth() * 0.038,
    },
    horizontalFlatlist: {
        paddingBottom: deviceHeight() * 0.017,
        paddingLeft: deviceWidth() * 0.036,
        paddingRight: deviceWidth() * 0.036
    },
    updatedFlatList: {
        paddingTop: deviceHeight() * 0.023
    },
    debitsVirtical: {
        marginBottom: deviceHeight() * 0.008
    },
    paymentsDueList: {
        paddingBottom: deviceHeight() * 0.044,
        paddingTop: deviceHeight() * 0.005
    },
    rowAlignments: {
        marginBottom: deviceHeight() * 0.011
    },
    imageWraper: {
        flex: 1,
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        height: 120,
        width: '100%',
    },
    images: {
        borderWidth: 1,
        width: deviceWidth() * 0.4,
        height: deviceHeight() * 0.125,
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: deviceWidth() * 0.04
    },
    spacingCards: {
        marginTop: deviceHeight() * 0.012
    }
})