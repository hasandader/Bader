import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from '../Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from './Row';
import { apartments, noteMarker, ticket, priceTag, lamp } from '../../../images/index';

const RealEstatesCard = (props) => {
    const {
        item,
        onPress,
        virticalCardStyle,
        header
    } = props;

    return (
        <GeneralCard
            containerStyle={[virticalCardStyle ? virticalCardStyle : styles.realEstatesView]}
            children={
                <View>
                    {header && <>
                        <View style={styles.mainRow}>
                            <TouchableOpacity onPress={onPress}>
                                <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                            </TouchableOpacity>
                            <View style={styles.row}>
                                <Text children='الوحدات العقارية' style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={apartments} style={[styles.chartIcon, { width: 27, height: 28.5 }]} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.divider, styles.updatedDivider]} />
                    </>}
                    <Row
                        icon={noteMarker}
                        sideIcon={styles.sideIcon}
                        title="رقم الوحدة"
                        information={item.unitNumber}
                        style={styles.rowAlignments}
                    />
                    <Row
                        icon={ticket}
                        sideIcon={styles.sideIcon}
                        title="نوع الوحدة"
                        information={item.unitType}
                        style={styles.rowAlignments}
                    />
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.sideIcon, { height: 50 }]}
                        title="سعر الوحدة"
                        information={parseFloat(item.unitPrice).toFixed(2)}
                        style={styles.rowAlignments}
                    />
                    <Row
                        icon={lamp}
                        sideIcon={styles.sideIcon}
                        title="حالة الوحدة"
                        information={item.status}
                        infoStyle={[item.status == 'مؤجرة' ? { color: primaryColors.malachite } : { color: primaryColors.redOrange }]}
                    />
                </View>
            }
        />
    )
}

RealEstatesCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    header: PropTypes.bool,
    virticalCardStyle: PropTypes.any
}

export default RealEstatesCard