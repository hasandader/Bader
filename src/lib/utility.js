import { Dimensions, Platform, PixelRatio, useColorScheme } from 'react-native';

const getWindow = () => Dimensions.get('window');
const getPlatformOs = () => Platform.OS;

export const deviceHeight = () => {
    return getWindow().height;
};

export const deviceWidth = () => {
    return getWindow().width;
};

export const isPlatformIos = () => {
    return getPlatformOs() === 'ios';
};

export const isPlatformAndroid = () => {
    return getPlatformOs() === 'android';
};

export const isIPhoneX = () => {
    return getWindow().height == 812 || getWindow().width == 812;
};

export const isDark = () => {
    return useColorScheme() === 'dark';
};

export const isLight = () => {
    return useColorScheme() === 'light';
};

export const normalizeSize = (size) => {
    const pixelRatio = PixelRatio.get();
    const deviceHeight = getWindow().height;
    const deviceWidth = getWindow().width;

    if (pixelRatio >= 2 && pixelRatio < 3) {
        // iphone 5s and older Androids
        if (deviceWidth < 360) {
            return size * 0.95;
        }
        // iphone 5
        if (deviceHeight < 667) {
            return size;
            // iphone 6-6s
        } else if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.15;
        }
        // older phablets
        return size * 1.25;
    } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
        }
        // Catch other weird android width sizings
        if (deviceHeight < 667) {
            return size * 1.15;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.2;
        }
        // catch larger devices
        // ie iphone 6s plus / 7 plus / mi note 等等
        return size * 1.27;
    } else if (pixelRatio >= 3.5) {
        // catch Android font scaling on small machines
        // where pixel ratio / font scale ratio => 3:3
        if (deviceWidth <= 360) {
            return size;
            // Catch other smaller android height sizings
        }
        if (deviceHeight < 667) {
            return size * 1.2;
            // catch in-between size Androids and scale font up
            // a tad but not too much
        }
        if (deviceHeight >= 667 && deviceHeight <= 735) {
            return size * 1.25;
        }
        // catch larger phablet devices
        return size * 1.4;
    } else {
        // if older device ie pixelRatio !== 2 || 3 || 3.5
        return size;
    }
}