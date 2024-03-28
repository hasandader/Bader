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
        style,
        titleStyle,
        infoStyle,
    } = props;

    return (
        <View style={[styles.rowItems, style]}>
            <View style={[styles.halfRow, styles.infoAlignment]}>
                <Text children={information} h5 style={infoStyle} />
            </View>
            <View style={[styles.halfRow, styles.sideTitle]}>
                <Text children={title} fontFamily={fonts.regular} size={20} color={primaryColors.eclipse} style={titleStyle} />
                <Image source={icon} style={sideIcon} />
            </View>
        </View>
    )
}

Row.propTypes = {
    title: PropTypes.string,
    information: PropTypes.string,
    icon: PropTypes.any,
    sideIcon: PropTypes.any,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    infoStyle: PropTypes.any
}

export default Row