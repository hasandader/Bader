import React from 'react';
import { Text, StyleSheet, Platform, I18nManager } from 'react-native';
import PropTypes from 'prop-types';
import { normalizeSize } from '../../lib/utility';
import { fonts } from '../../theme/fonts';
import { primaryColors } from '../../theme/colors';

const setTextSize = size => ({
    fontSize: normalizeSize(size),
});

const TextElement = props => {
    const {
        style,
        size,
        align,
        xsmall,
        small,
        children,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        weight,
        color,
        fontFamily,
        fontSize,
        height,
        mTop,
        mBottom,
        mHorizontal,
        textDecorationLine,
        transform,
        lineHeight,
        key,
        numberOfLines,
        ellipsizeMode,
        ...rest
    } = props;
    return (
        <Text
            key={key}
            style={[
                styles.text,
                h1 && { fontSize: 40 },
                h2 && { fontSize: 36 },
                h3 && { fontSize: 28 },
                h4 && { fontSize: 22 },
                h5 && { fontSize: 18 },
                h6 && { fontSize: 16 },
                small && { fontSize: 12 },
                xsmall && { fontSize: 10 },
                align && { textAlign: align },
                textDecorationLine && { textDecorationLine: textDecorationLine },
                weight && { fontWeight: weight },
                color && { color: color },
                fontFamily && { fontFamily },
                fontSize && { fontSize },
                size && { fontSize: size },
                mTop && { marginTop: mTop },
                mBottom && { marginBottom: mBottom },
                style && style,
                mHorizontal && { marginHorizontal: mHorizontal },
                transform && { transform: transform },
                lineHeight && { lineHeight: lineHeight }
            ]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
            {...rest}>
            {children}
        </Text>
    );
};

TextElement.propTypes = {
    style: Text.propTypes.style,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    small: PropTypes.bool,
    size: PropTypes.number,
    weight: PropTypes.oneOf([
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        'normal',
        'bold',
    ]),
    align: PropTypes.oneOf(['center', 'left', 'justify', 'right']),
    color: PropTypes.string,
    xsmall: PropTypes.bool,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    children: PropTypes.any,
    height: PropTypes.number,
    transform: PropTypes.array
};

export default TextElement;

const styles = StyleSheet.create({
    text: {
        color: primaryColors.dimGray,
        ...Platform.select({
            ios: {
                fontSize: 14,
                transform: [{ translateY: 2 }], // for below font.
            },
            android: {
                fontSize: 13.5,
            },
        }),
        padding: I18nManager.isRTL ? 3 : 0,
        fontFamily: fonts.regular,
        letterSpacing: 0.2, // doesn't work on android until mimimum android sdk to 21+
        lineHeight: 20,
    },
});