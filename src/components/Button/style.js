import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight, deviceWidth, isPlatformIos } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    buttonWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: deviceWidth() * 0.77,
        height: 51,
        backgroundColor: primaryColors.scooter,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: fonts.regular,
        color: primaryColors.white,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        paddingTop: isPlatformIos() ? 6 : 0
    },
});