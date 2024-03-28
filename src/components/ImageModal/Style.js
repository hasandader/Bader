import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts, secondaryFonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
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
});
