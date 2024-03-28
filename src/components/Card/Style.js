import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    cardContainer: {
        width: deviceWidth() * 0.92,
        borderRadius: 8,
        backgroundColor: primaryColors.white,
        alignSelf: 'center',
        paddingTop: deviceHeight() * 0.017,
        paddingBottom: deviceHeight() * 0.027
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,

        elevation: 2,
    },
})