import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    secondContainer: {
        flex: 1,
        backgroundColor: primaryColors.aliceBlue,
    },
    subContainer: {
        flex: 1,
        backgroundColor: primaryColors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        zIndex: 1,
        marginTop: - deviceHeight() * 0.055,
        paddingRight: deviceWidth() * 0.11,
        paddingLeft: deviceWidth() * 0.11,
        paddingTop: deviceHeight() * 0.029,
        // height: deviceHeight() * 0.63
    },
    topImage: {
        width: deviceWidth(),
        height: deviceHeight() * 0.43,
    },
    gradient: {
        width: '100%',
        height: '100%',
    },
    header: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.26,
        fontFamily: fonts.titleRegular,
        color: primaryColors.white,
        lineHeight: 30,
    },
    title: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
    },
    inputTxtStyle: {
        textAlign: 'left',
        fontFamily: fonts.enFont,
        fontSize: 16,
    },
    inputsAlignment: {
        marginBottom: deviceHeight() * 0.036
    },
    condotionContainer: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginTop: deviceHeight() * 0.017,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    square: {
        borderWidth: 2,
        width: 28,
        height: 28,
        borderColor: primaryColors.kaitoke,
        marginLeft: I18nManager.isRTL ? 0 : 4,
        marginRight: I18nManager.isRTL ? 4 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tailLogo: {
        width: 40,
        height: 37
    },
    screenBottom: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        marginTop: deviceHeight() * 0.058,
        marginBottom: deviceHeight() >= 812 ? deviceHeight() * 0.15 : deviceHeight() * 0.05,
    },
    keyboardView: {
        flex: 1,
        // height: '100%',
        backgroundColor: '#fff',
    },
    tailText: {
        fontFamily: fonts.titleRegular,
        fontSize: 14,
        color: primaryColors.sherpaBlue
    },
    activityIndicator: {
        backgroundColor: primaryColors.white,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.13,
        zIndex: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})