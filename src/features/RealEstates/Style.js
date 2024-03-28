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
        paddingTop: 1
    },
    flatListContainer: {
        paddingTop: 10,
        paddingBottom: 35
    },
    flatList: {
        height: '100%',
    },
    cardContainer: {
        marginBottom: deviceHeight() * 0.017,
    },
    row: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: deviceWidth() * 0.038,
        paddingLeft: deviceWidth() * 0.038,
    },
    mainRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    updatedDivider: {
        marginBottom: deviceHeight() * 0.0094
    },
    updatedRow: {
        justifyContent: 'space-between',
        marginTop: deviceHeight() * 0.017
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
    numbers: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: primaryColors.white,
        paddingTop: 4,
    },
    chartWraper: {
        width: 113,
        height: 113,
        borderRadius: 60,
        backgroundColor: primaryColors.gallery,
        justifyContent: 'center',
        marginTop: deviceHeight() * 0.013
    },
    statistics: {
        alignItems: 'center'
    },
    percentage: {
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        fontFamily: fonts.bold,
        paddingTop: 3
    },
    listWraper: {
        marginTop: 35
    },
    horizontalFlatlist: {
        paddingBottom: deviceHeight() * 0.017,
        paddingLeft: deviceWidth() * 0.036,
        paddingRight: deviceWidth() * 0.036
    },
    updatedFlatList: {
        marginTop: deviceHeight() * 0.011,
        paddingBottom: '12%',
    },
    realEstatesView: {
        marginRight: 3
    },
    sideIcon: {
        width: 45,
        height: 45,
        marginLeft: I18nManager.isRTL ? 0 : deviceWidth() * 0.057,
        marginRight: I18nManager.isRTL ? deviceWidth() * 0.057 : 0
    },
    rowAlignments: {
        marginBottom: deviceHeight() * 0.003
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
    dateRectangle: {
        backgroundColor: primaryColors.zumthor,
        marginTop: deviceHeight() * 0.014,
        paddingLeft: deviceWidth() * 0.053,
    },
    dateCircle: {
        backgroundColor: primaryColors.kaitoke
    },
    halfRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sideTitle: {
        paddingRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.028,
        paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.028 : 0
    },
    text: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginRight: deviceWidth() * 0.079,
        marginLeft: deviceWidth() * 0.079
    },
    rightAlignment: {
        marginRight: deviceWidth() * 0.03
    },
    image: {
        height: 120,
        width: '100%',
    },
    imagesContainer: {
        paddingHorizontal: deviceWidth() * 0.043
    },
    imageWraper: {
        flex: 1,
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden'
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    closeButtonStyle: {
        width: 35,
        height: 35,
        top: deviceHeight() * 0.06,
        right: deviceWidth() * 0.06,
        position: 'absolute',
        zIndex: 1,
    },
    closeBtn: {
        width: '100%',
        height: '100%',
        tintColor: primaryColors.white
    },
    circleBtnWraper: {
        width: 174,
        height: 174,
        marginBottom: 20,
        backgroundColor: primaryColors.gallery,
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: primaryColors.chateauGreen,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCenter: {
        width: 124,
        height: 124,
        backgroundColor: primaryColors.white,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center'
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
    virticalCards: {
        marginBottom: deviceHeight() * 0.017
    },
    nonActiveBackground: {
        backgroundColor: primaryColors.silver
    },
    nonActiveFont: {
        color: primaryColors.doveGray
    },
    nonActiveIcon: {
        tintColor: primaryColors.doveGray
    },
    nonActiveCalender: {
        backgroundColor: primaryColors.doveGray
    },
    searchInput: {
        alignSelf: 'center',
        borderBottomWidth: 0,
        height: 50,
        width: deviceWidth() * 0.92,
        backgroundColor: primaryColors.white,
        borderRadius: 8,
        paddingLeft: deviceWidth() * 0.038,
        zIndex: 1
    },
    closehIcon: {
        width: 25,
        height: 25,
        tintColor: primaryColors.fuchsiaPink
    },
    inputText: {
        fontFamily: fonts.regular,
        fontSize: 18,
        textAlign: 'right',
        paddingRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.038,
        paddingLeft: I18nManager.isRTL ? deviceWidth() * 0.038 : 0,
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
    spacingCards: {
        marginTop: deviceHeight() * 0.012
    },
    squareIcon: {
        marginRight: deviceWidth() * 0.019,
        marginLeft: deviceWidth() * 0.016
    },
    selectedSquare: {

    },
    circleStyle: {
        marginLeft: 0,
        marginRight: 0
    }
})