import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts, secondaryFonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // alignSelf: 'center',
        width: deviceWidth() * 0.77,
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: primaryColors.midnight,
    },
    inputTxt: {
        flex: 1,
        height: '100%',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        fontFamily: fonts.regular,
        fontSize: 14,
        color: primaryColors.black,
        paddingTop: 3
    }
});
