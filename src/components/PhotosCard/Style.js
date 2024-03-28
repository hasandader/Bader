import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts, secondaryFonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    cardContainer: {
        marginBottom: deviceHeight() * 0.017
    },
    mainRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: deviceWidth() * 0.038,
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
    imagesContainer: {
        paddingHorizontal: deviceWidth() * 0.043
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
});
