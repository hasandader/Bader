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

const Card = (props) => {
    const {
        containerStyle,
        title,
        mainIcon,
        colors,
        address,
        type,
        rented,
        empty,
        onPress,
        details,
        buyDate,
        evaluatingDate,
        activeOpacity = 0.5,
        link,
        onLinkPress,
        rectangleStyle,
        circleStyle
    } = props;

    return (
        <TouchableOpacity style={[styles.cardContainer, styles.shadow, containerStyle]}
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            <View style={styles.row}>
                <Text children={title} style={styles.title} />
                <View style={[styles.iconWraper]}>
                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={colors} style={styles.iconGradient}>
                        <Image source={mainIcon} style={styles.mainIcon} />
                    </LinearGradient>
                </View>
            </View>
            {details && <View style={[styles.divider, styles.updatedDivider]} />}
            <View style={[styles.row, styles.addressAlignment]}>
                <Text children={address} style={styles.address} />
                <Image source={marker} style={styles.sideIcons} />
            </View>
            {!details && <View style={styles.divider} />}
            <View style={[styles.row, styles.addressAlignment]}>
                <Text children={type} style={styles.address} />
                <Image source={ticket} style={styles.sideIcons} />
            </View>
            {details && <View style={[styles.divider, styles.updatedDivider]} />}
            {
                details ?
                    <View style={[styles.row, styles.updatedRow]}>
                        <View>
                            <Text children='تاريخ الشراء' style={styles.subTitle} color={primaryColors.doveGray} />
                            <View style={[styles.rectangle, styles.dateRectangle]}>
                                <Text children={`${buyDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                <View style={[styles.circle, styles.dateCircle, circleStyle]}>
                                    <Image source={calendar} style={styles.calenderIcon} />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text children='تاريخ التقييم' style={styles.subTitle} color={primaryColors.doveGray} />
                            <View style={[styles.rectangle, styles.dateRectangle]}>
                                <Text children={`${evaluatingDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                <View style={[styles.circle, styles.dateCircle, circleStyle]}>
                                    <Image source={calendar} style={styles.calenderIcon} />
                                </View>
                            </View>
                        </View>
                    </View>
                    :
                    <View style={[styles.row, styles.updatedRow]}>
                        <View style={[styles.rectangle, { backgroundColor: primaryColors.mintCream, justifyContent: 'space-between' }]}>
                            <View style={[styles.circle, circleStyle, { backgroundColor: primaryColors.malachite }]}>
                                <Text children={empty} h6 style={styles.numbers} />
                            </View>
                            <Text children='وحدات شاغرة' fontFamily={fonts.bold} color={primaryColors.malachite} />
                        </View>
                        <View style={[styles.rectangle, { justifyContent: 'space-between' }]}>
                            <View style={[styles.circle, circleStyle]}>
                                <Text children={rented} h6 style={styles.numbers} />
                            </View>
                            <Text children='وحدات مؤجرة' fontFamily={fonts.bold} color={primaryColors.redOrange} />
                        </View>
                    </View>
            }
            {
                link &&
                <TouchableOpacity style={styles.linkWraper} onPress={onLinkPress} >
                    <Text children='عرض بيانات تفصيلية إضافية للعقار' size={15} color={primaryColors.treePoppy} textDecorationLine='underline' align='right' style={styles.linkTxt} />
                </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}

Card.propTypes = {
    containerStyle: PropTypes.any,
    title: PropTypes.string,
    mainIcon: PropTypes.any,
    colors: PropTypes.array,
    address: PropTypes.string,
    type: PropTypes.string,
    rented: PropTypes.number,
    empty: PropTypes.number,
    onPress: PropTypes.func,
    details: PropTypes.bool,
    link: PropTypes.bool,
    onLinkPress: PropTypes.func
}

export default Card