import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './Style';

const Card = (props) => {
    const {
        containerStyle,
        children,
        activeOpacity = 1,
        onPress,
    } = props;

    return (
        <TouchableOpacity style={[styles.cardContainer, styles.shadow, containerStyle]}
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

Card.propTypes = {
    containerStyle: PropTypes.object,
    children: PropTypes.any,
    onPress: PropTypes.func
}

export default Card