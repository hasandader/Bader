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
import { outgoings, noteMarker, priceTag, calendar } from '../../../images/index';
import { isPlatformIos } from '../../../lib/utility';

const OutgoingsCard = (props) => {
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
                                <Text children='المصروفات' style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={outgoings} style={[styles.chartIcon, { width: 34, height: 17 }]} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.divider, styles.updatedDivider]} />
                    </>}
                    <View style={[styles.halfRow, styles.sideTitle]}>
                        <Text children="تفاصيل المصروف" fontFamily={fonts.regular} size={20} color={primaryColors.eclipse} />
                        <Image source={noteMarker} style={styles.sideIcon} />
                    </View>
                    <Text children={item.statement} h5 style={[styles.text]} />
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.sideIcon, { height: 50 }]}
                        title="قيمة المصروف"
                        information={parseFloat(item.amount).toFixed(2)}
                        style={styles.rowAlignments}
                    />
                    <View style={[styles.divider, styles.updatedDivider]} />
                    <View style={[styles.row, styles.dateRow]}>
                        <View style={[styles.rectangle, styles.dateRectangle]}>
                            <Text children={`${item.due_date} م`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                            <View style={[styles.circle, styles.dateCircle]}>
                                <Image source={calendar} style={styles.calenderIcon} />
                            </View>
                        </View>
                        <Text children="التاريخ" size={20} color={primaryColors.eclipse} style={styles.rightAlignment} />
                    </View>
                </View>
            }
        />
    )
}

OutgoingsCard.propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    header: PropTypes.bool,
    virticalCardStyle: PropTypes.any
}

export default OutgoingsCard