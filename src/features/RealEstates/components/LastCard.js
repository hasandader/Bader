import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';

const LastCard = (props) => {
    const {
        buttonText,
        title,
        topIcon,
        onPress,
        iconStyle,
        buttonCenter,
        circleBtnWraper,
        fontSize
    } = props;

    return (
        <GeneralCard
            containerStyle={{ flex: 1 }}
            children={
                <View style={{ flex: 1 }}>
                    <View>
                        <View style={styles.mainRow}>
                            <View style={styles.row}>
                                <Text children={title} style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={topIcon} style={[styles.chartIcon, { width: 27, height: 28.5 }, iconStyle]} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View style={styles.lastCardDivider} />
                    </View>
                    <View style={styles.btnWraper}>
                        <TouchableOpacity style={[styles.circleBtnWraper, styles.shadow, circleBtnWraper]} activeOpacity={0.5} onPress={onPress}>
                            <View style={[styles.buttonCenter, buttonCenter]}>
                                <Text children={buttonText} size={fontSize || 20} align='center' color={primaryColors.valhalla} fontFamily={fonts.bold} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        />
    )
}

LastCard.propTypes = {
    buttonText: PropTypes.string,
    title: PropTypes.string,
    topIcon: PropTypes.any,
    onPress: PropTypes.func,
    iconStyle: PropTypes.object
}

export default LastCard