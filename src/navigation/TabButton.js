import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColors } from '../theme/colors';

const TabButton = (props) => {
    const {
        image,
    } = props;

    return (
        <View style={[styles.iconWraper, styles.shadow]}>
            <LinearGradient useAngle={true} angleCenter={{ x: 0.45, y: 0.5 }} colors={[gradientColors.corn, gradientColors.yellow]} style={[styles.buttonWraper, { width: '100%' }]}>
                {image}
            </LinearGradient>
        </View>
    )
}

TabButton.propTypes = {
    image: PropTypes.any
}

export default TabButton