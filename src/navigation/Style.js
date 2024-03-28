import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight, deviceWidth } from '../lib/utility';
import { primaryColors } from '../theme/colors';
import { fonts } from '../theme/fonts';

export default StyleSheet.create({
    iconWraper: {
        width: 42,
        height: 42,
    },
    buttonWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.00,

        elevation: 2,
    },
    activeLabel: {
        color: primaryColors.doveGray,
        fontFamily: fonts.regular,
        fontSize: 15,
        textAlign: 'center'
    }
})