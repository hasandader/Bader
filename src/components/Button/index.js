import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props) => {
    const {
        onPress,
        title,
        image,
        style,
        titleStyle,
        imageStyle,
        disabled,
        linearGradient,
        activeOpacity,
        subChild,
        colors,
        anglrCenterX = 0.45,
        angleCenterY = 0.5,
        gradientStyle
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonWraper, style]}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            {
                linearGradient ?
                    <LinearGradient useAngle={true} angleCenter={{ x: anglrCenterX, y: angleCenterY }} colors={colors} style={[styles.buttonWraper, { width: '100%' }, gradientStyle]}>
                        <Text style={[styles.buttonText, titleStyle]}>
                            {title}
                        </Text>
                        {image && <Image source={image} style={imageStyle} />}
                    </LinearGradient>
                    :
                    <Text style={[styles.buttonText, titleStyle]}>
                        {title}
                    </Text>
            }
            {image && !linearGradient && <Image source={image} style={imageStyle} />}
            {subChild}
        </TouchableOpacity>
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.any,
    style: PropTypes.any,
    titleStyle: PropTypes.any,
    imageStyle: PropTypes.any,
    disabled: PropTypes.bool,
    linearGradient: PropTypes.bool,
    activeOpacity: PropTypes.number,
    subChild: PropTypes.any,
    anglrCenterX: PropTypes.number,
    angleCenterY: PropTypes.number
}

export default Button