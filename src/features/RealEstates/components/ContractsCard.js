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
import { contracts, noteMarker, priceTag, lamp, calendar } from '../../../images/index';
import { isPlatformIos } from '../../../lib/utility';

const ContractsCard = (props) => {
    const {
        item,
        onPress,
        virticalCardStyle,
        header,
        activeOpacity = 1,
        onContractPress,
    } = props;

    return (
        <GeneralCard
            containerStyle={[virticalCardStyle ? virticalCardStyle : styles.realEstatesView]}
            children={
                <TouchableOpacity activeOpacity={activeOpacity} onPress={onContractPress} >
                    {header &&
                        <>
                            <View style={styles.mainRow}>
                                <TouchableOpacity onPress={onPress}>
                                    <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                                </TouchableOpacity>
                                <View style={styles.row}>
                                    <Text children='عقود الايجار' style={styles.title} transform={[{ translateY: 5 }]} />
                                    <View style={[styles.iconWraper]}>
                                        <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                            <Image source={contracts} style={styles.chartIcon} />
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.divider, styles.updatedDivider]} />
                        </>
                    }
                    <Row
                        icon={noteMarker}
                        sideIcon={[styles.sideIcon, item.contractStatus == 'مغلق' && styles.nonActiveIcon]}
                        title="رقم العقد"
                        information={item.contractNumber}
                        style={styles.rowAlignments}
                    />
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.sideIcon, { height: 50 }, item.contractStatus == 'مغلق' && styles.nonActiveIcon]}
                        title="قيمة العقد"
                        information={parseFloat(item.contractPrice).toFixed(2)}
                        style={styles.rowAlignments}
                    />
                    <Row
                        icon={lamp}
                        sideIcon={[styles.sideIcon, item.contractStatus == 'مغلق' && styles.nonActiveIcon]}
                        title="حالة العقد"
                        information={item.contractStatus}
                        infoStyle={[{ color: primaryColors.malachite }, item.contractStatus == 'مغلق' && styles.nonActiveFont]}
                    />
                    <View style={[styles.divider, styles.updatedDivider]} />
                    <View style={[styles.row, styles.dateRow]}>
                        <View>
                            <Text children='تاريخ نهاية الإيجار' style={styles.subTitle} color={primaryColors.doveGray} />
                            <View style={[styles.rectangle, styles.dateRectangle, item.contractStatus == 'مغلق' && styles.nonActiveBackground]}>
                                <Text children={`${item.contractEndDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} style={!item.active && styles.nonActiveFont} />
                                <View style={[styles.circle, styles.dateCircle, , item.contractStatus == 'مغلق' && styles.nonActiveCalender]}>
                                    <Image source={calendar} style={styles.calenderIcon} />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text children='تاريخ بداية الايجار' style={styles.subTitle} color={primaryColors.doveGray} />
                            <View style={[styles.rectangle, styles.dateRectangle, , item.contractStatus == 'مغلق' && styles.nonActiveBackground]}>
                                <Text children={`${item.contractStartDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} style={!item.active && styles.nonActiveFont} />
                                <View style={[styles.circle, styles.dateCircle, item.contractStatus == 'مغلق' && styles.nonActiveCalender]}>
                                    <Image source={calendar} style={styles.calenderIcon} />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            }
        />
    )
}

ContractsCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    header: PropTypes.bool,
    virticalCardStyle: PropTypes.any
}

export default ContractsCard