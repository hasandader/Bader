import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { outgoings, ticket, priceTag } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from '../../../components/Row/index';
import { deviceHeight } from '../../../lib/utility';

const OutgoingsCard = (props) => {
    const {
        type,
        amount,
        containerStyle,
        showAll,
        onPress,
        header = true,
        title,
        secondTitle,
        infoStyle,
        numberOfLines,
        ellipsizeMode
    } = props;

    return (
        <GeneralCard
            containerStyle={[{ marginRight: 3, paddingBottom: deviceHeight() * 0.01 }, containerStyle]}
            children={
                <View style={{ flex: 1 }}>
                    {header && <>
                        <View style={[styles.mainRow, !showAll && { justifyContent: 'flex-end' }]}>
                            {showAll && <TouchableOpacity onPress={onPress} >
                                <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                            </TouchableOpacity>}
                            <View style={styles.row}>
                                <Text children='المصروفات' style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={outgoings} style={[styles.mainIcon, { height: 16, width: 33 }]} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.divider, styles.updatedDivider, styles.dividerBottom]} />
                    </>}
                    <Row
                        icon={ticket}
                        sideIcon={[styles.largeSideIcon,]}
                        title={title}
                        information={type}
                        infoStyle={infoStyle}
                        numberOfLines={numberOfLines}
                        ellipsizeMode={ellipsizeMode}
                    />
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.largeSideIcon, { height: 50 }]}
                        title={secondTitle}
                        information={amount}
                    />
                </View>
            }
        />
    )
}

OutgoingsCard.propTypes = {

}

export default OutgoingsCard