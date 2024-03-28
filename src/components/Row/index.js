import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { marker, ticket, calendar } from '../../images/index';
import { fonts } from '../../theme/fonts';
import { primaryColors } from '../../theme/colors';
import { isPlatformIos } from '../../lib/utility';

const Row = (props) => {
    const {
        title,
        information,
        icon,
        sideIcon,
        style,
        titleStyle,
        infoStyle,
        infoWraper,
        resizeMode,
        secondTitle,
        secondTitleStyle,
        date,
        titlePartStyle,
        dateStyle,
        moreInfo,
        activeOpacity = 1,
        onPress,
        numberOfLines,
        ellipsizeMode
    } = props;

    return (
        <TouchableOpacity style={[styles.rowItems, style]} activeOpacity={activeOpacity} onPress={onPress}>
            {
                date &&
                <View style={[styles.rectangle, styles.dateRectangle, dateStyle]}>
                    <Text children={`${date} م`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                    <View style={[styles.circle, styles.dateCircle]}>
                        <Image source={calendar} style={styles.calenderIcon} />
                    </View>
                </View>
            }
            <View style={[styles.halfRow, styles.infoAlignment, infoWraper]}>
                <Text children={information} h5 style={[styles.title, infoStyle]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} />
                {moreInfo && <Text children={moreInfo} h5 style={infoStyle} />}
            </View>
            <View style={[styles.halfRow, styles.sideTitle, titlePartStyle]}>
                <View>
                    <Text children={title} fontFamily={fonts.regular} size={20} color={primaryColors.eclipse} lineHeight={25} style={titleStyle} />
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
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    infoStyle: PropTypes.any,
    infoWraper: PropTypes.any,
    onPress: PropTypes.func,
}

export default Row