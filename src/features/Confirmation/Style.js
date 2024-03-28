import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth, isPlatformAndroid } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    imagesWraper: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight() * 0.14,
        width: '100%',
        marginBottom: deviceHeight() * 0.045,
    },
    logo: {
        width: deviceWidth() * 0.62,
        height: deviceHeight() * 0.12,
        resizeMode: 'contain',
    },
    inputTxtStyle: {
        textAlign: 'right',
        fontFamily: fonts.enFont,
        fontSize: 20,
        top: isPlatformAndroid() ? 10 : 0,
    },
    inputContainer: {
        alignSelf: 'center',
        width: deviceWidth() * 0.85
    },
    title: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        width: deviceWidth() * 0.85,
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.049
    },
    btnContainer: {
        marginTop: deviceHeight() * 0.061,
        width: deviceWidth() * 0.85,
    },
    doneBtn: {
        marginTop: deviceHeight() * 0.03,
        width: deviceWidth() * 0.3,
        height: 40,
    },
    gradientStyle: {
        height: 40,
    },
    textWraper: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginTop: deviceHeight() * 0.03,
        marginRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.096,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.096 : 0
    },
    spacing: {
        marginRight: I18nManager.isRTL ? 0 : deviceWidth() * 0.096,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 0.096 : 0
    },
    textBtn: {
        textDecorationLine: 'underline',
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        alignSelf: 'center',
    },
    tailLogo: {
        width: 40,
        height: 37
    },
    screenBottom: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: deviceHeight() > 812 ? deviceHeight() * 0.08 : deviceHeight() * 0.03
    },
    tailText: {
        fontFamily: fonts.titleRegular,
        fontSize: 14,
        color: primaryColors.sherpaBlue
    },
    backBtn: {
        marginTop: deviceHeight() * 0.08,
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',
        padding: 10,
        // marginBottom: deviceHeight() * 0.02
    },
    box: {
        width: deviceWidth() * 0.8,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: primaryColors.alabaster,
        paddingTop: deviceHeight() * 0.02,
        paddingBottom: deviceHeight() * 0.027,
    },
    boxAlignment: {
        marginTop: deviceHeight() * 0.014
    },
    underline: {
        borderBottomWidth: 1
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
        marginTop: deviceHeight() * 0.5,
        zIndex: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputSpacing: {
        marginTop: deviceHeight() * 0.03,
    },
    inputTxt: {
        textAlign: 'right',
        fontFamily: fonts.medium,
        fontSize: 16,
        top: isPlatformAndroid() ? 10 : 0,
        color: primaryColors.eclipse
    },
    errorTxt: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginRight: I18nManager.isRTL ? 0 : 40,
        marginLeft: I18nManager.isRTL ? 40 : 0,
        color: 'red'
    },
    modalStyle: {
        flex: 1,
        height: '100%',
        zIndex: 1,
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 20,
        marginBottom: 15,
    },
    modalImage: {
        width: deviceWidth() * 0.16,
        height: deviceHeight() * 0.06
    },
    btnSpacing: {
        marginTop: deviceHeight() > 812 ? deviceHeight() * 0.05 : deviceHeight() * 0.02
    },
    tree2: {
        width: deviceWidth() * 0.088,
        height: deviceHeight() * 0.06,
        alignSelf: 'flex-end',
        left: deviceWidth() * 0.12,
        resizeMode: 'contain'
    },
});