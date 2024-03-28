import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from '../Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { priceTag, folder, contracts, id2, realEstates, calendar } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from '../../../components/Row/index';
import { isPlatformIos } from '../../../lib/utility';

const DebitsCard = (props) => {
    const {
        header,
        onPress,
        onRenterPress,
        amount,
        renterName,
        estateName,
        contractNumber,
        date,
        cardStyle,
        onEstatePress,
        onContractPress
    } = props;

    return (
        <GeneralCard
            containerStyle={[{ marginRight: 3 }, cardStyle]}
            children={
                <View>
                    {header && <View style={styles.mainRow}>
                        <TouchableOpacity onPress={onPress}>
                            <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                        </TouchableOpacity>
                        <View style={styles.row}>
                            <Text children='الدفعات المستحقة' style={styles.title} />
                            <View style={[styles.iconWraper]}>
                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                    <Image source={contracts} style={{ height: 30, width: 25, tintColor: primaryColors.white }} />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>}
                    {header && <View style={[styles.divider, styles.updatedDivider, { marginBottom: 8 }]} />}
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.largeSideIcon, { height: 50 }]}
                        title="قيمة الدفعة"
                        information={amount}
                        infoStyle={{ fontSize: 16 }}
                    />
                    <Row
                        icon={id2}
                        sideIcon={[styles.largeSideIcon, { height: 40 }]}
                        title="اسم المستأجر"
                        information={renterName}
                        infoStyle={{ fontSize: 16 }}
                        activeOpacity={0.5}
                        onPress={onRenterPress}
                    />
                    <Row
                        icon={realEstates}
                        sideIcon={[styles.iconStyle]}
                        title="اسم العقار"
                        information={estateName}
                        style={{ marginBottom: 10 }}
                        activeOpacity={0.5}
                        onPress={onEstatePress}
                    />
                    <Row
                        icon={contracts}
                        sideIcon={[styles.iconStyle]}
                        title="عقد رقم"
                        information={contractNumber}
                        activeOpacity={0.5}
                        onPress={onContractPress}
                    />
                    <View style={[styles.divider, styles.updatedDivider, { marginBottom: 8 }]} />
                    <View style={[styles.row, styles.dateRow]}>
                        <View style={[styles.rectangle, styles.dateRectangle, { marginTop: 0 }]}>
                            <Text children={`${date} م`} size={14} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                            <View style={[styles.dateCircle]}>
                                <Image source={calendar} style={styles.calenderIcon} />
                            </View>
                        </View>
                        <Text children="تاريخ الاستحقاق" size={16} color={primaryColors.eclipse} style={styles.rightAlignment} />
                    </View>
                </View>
            }
        />
    )
}

DebitsCard.propTypes = {

}

export default DebitsCard