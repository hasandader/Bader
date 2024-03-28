import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    image: {
        width: '95%',
        height: 330,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.12,
    },
    title: {
        fontSize: 20,
        lineHeight: 26,
        color: primaryColors.scarpaFlow,
        marginTop: 20,
        fontFamily: fonts.bold,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 18,
        lineHeight: 24,
        color: primaryColors.scarpaFlow,
        width: '86%',
        textAlign: 'center',
        marginTop: 26,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingTop: 30
    },
    contentWraper: {
        width: '100%',
        marginTop: 60
    },
    textsWraper: {
        width: '100%',
        alignItems: 'center'
    },
    skipButton: {
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: 20,
        marginLeft: 20,
    },
    button: {
        backgroundColor: primaryColors.yellow,
        borderRadius: 6,
        width: '85%',
        height: 48,
        alignSelf: 'center',
    },
    buttonTxt: {
        color: primaryColors.white,
        fontFamily: fonts.regular,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
    },
    btnContainer: {
        marginTop: deviceHeight() <= 812 ? deviceHeight() * 0.035 : deviceHeight() * 0.061,
        width: deviceWidth() * 0.85,
    },
    btnTitle: {
        fontFamily: fonts.regular
    }
});