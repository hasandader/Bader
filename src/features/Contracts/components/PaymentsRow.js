import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { marker, ticket, calendar } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors } from '../../../theme/colors';
import { isPlatformIos } from '../../../lib/utility';

const Row = (props) => {
    const {
        title,
        information,
        icon,
        sideIcon,
        titleStyle,
        infoStyle,
        resizeMode,
        secondTitle,
        secondTitleStyle,
        date,
        dateStyle,
        moreInfo,
        onLongPress
    } = props;

    return (
        <TouchableOpacity style={[styles.rowItems, styles.paymentsRow]}
            activeOpacity={1}
            onLongPress={onLongPress}
        >
            <View style={[styles.paymentsRectangle, styles.paymentsDateRectangle, dateStyle]}>
                <Text children={`${date}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                <View style={[styles.paymentsCircle, styles.paymentsDateCircle]}>
                    <Image source={calendar} style={styles.paymentsCalenderIcon} />
                </View>
            </View>
            <View style={[styles.halfRow, styles.infoAlignment, styles.upgradedRow]}>
                <Text children={information.toFixed(2)} h5 style={infoStyle} />
                {moreInfo && <Text children={moreInfo.toFixed(2)} h5 style={infoStyle} />}
            </View>
            <View style={[styles.halfRow, styles.sideTitle, styles.titlePartStyle]}>
                <View>
                    <Text children={title} fontFamily={fonts.regular} size={20} color={primaryColors.eclipse} style={titleStyle} />
                    {secondTitle && <Text children={secondTitle} fontFamily={fonts.regular} size={20} color={primaryColors.eclipse} style={secondTitleStyle} />}
                </View>
                <Image source={icon} style={sideIcon} resizeMode={resizeMode} />
            </View>
        </TouchableOpacity>
    )
}

Row.propTypes = {
    title: PropTypes.string,
    information: PropTypes.string,
    icon: PropTypes.any,
    sideIcon: PropTypes.any,
    titleStyle: PropTypes.object,
    infoStyle: PropTypes.any,
}

export default Row