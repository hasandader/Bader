import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View, I18nManager } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { contracts, done, warning, battery } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from './PaymentsRow';

const Card = (props) => {
    const {
        payments,
        containerStyle,
        showAll,
        onLongPress,
        onPress,
        header
    } = props;

    return (
        <GeneralCard
            containerStyle={containerStyle}
            children={
                <View>
                    <View style={[styles.mainRow, !showAll && { justifyContent: 'flex-end' }]}>
                        {showAll && <TouchableOpacity onPress={onPress} >
                            <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                        </TouchableOpacity>}
                        {
                            header &&
                            <View style={styles.row}>
                                <Text children='دفعات العقد' style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={contracts} style={styles.mainIcon} />
                                    </LinearGradient>
                                </View>
                            </View>}
                    </View>
                    {header && <View style={[styles.divider, styles.updatedDivider]} />}
                    {
                        payments &&
                        payments.map((item, index) => (
                            <>
                                <Row
                                    icon={item.isPaid ? done : warning}
                                    sideIcon={[styles.icons]}
                                    title={item.isPaid ? 'مسدد' : 'مستحق'}
                                    // secondTitle={item.status == 3 && 'مسدد'}
                                    information={parseFloat(item.paymentAmount)}
                                    // moreInfo={item.status == 3 && item.amount}
                                    date={item.paymentDate}
                                    secondTitleStyle={[{ fontSize: 16, }, !I18nManager.isRTL && { textAlign: 'right' }]}
                                    titleStyle={{ fontSize: 16 }}
                                    onLongPress={() => onLongPress(item.id)}
                                />
                                {index < payments.length - 1 && <View style={[styles.divider, styles.updatedDivider, { marginBottom: 5 }]} />}
                            </>
                        ))
                    }
                </View>
            }
        />
    )
}

Card.propTypes = {

}

export default Card