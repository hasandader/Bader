import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View, FlatList } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../theme/fonts';
import { primaryColors, gradientColors } from '../../theme/colors';
import GeneralCard from '../../components/Card/index';
import FastImage from 'react-native-fast-image';
import { imageIcon } from '../../images/index';

const PhotosCard = (props) => {
    const {
        images,
        onImagePress,
        onPress,
        header
    } = props;

    return (
        <GeneralCard
            containerStyle={styles.cardContainer}
            children={
                <View>
                    {header && <>
                        <View style={styles.mainRow}>
                            <TouchableOpacity onPress={onPress}>
                                <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                            </TouchableOpacity>
                            <View style={styles.row}>
                                <Text children='الصور' style={styles.title} transform={[{ translateY: 5 }]} />
                                <View style={[styles.iconWraper]}>
                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                        <Image source={imageIcon} style={[styles.chartIcon, { width: 26, height: 26 }]} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.divider, styles.updatedDivider]} />
                    </>}
                    <FlatList
                        data={images}
                        style={styles.imagesContainer}
                        renderItem={({ item }) => (
                            <View style={styles.imageWraper}>
                                <TouchableOpacity
                                    key={item.id}
                                    style={{ flex: 1 }}
                                    onPress={() => onImagePress(item)}>
                                    <FastImage
                                        style={styles.image}
                                        source={{ uri: item.full_src }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            }
        />
    )
}

PhotosCard.propTypes = {
    item: PropTypes.array,
    onPress: PropTypes.func,
    header: PropTypes.bool,
    onImagePress: PropTypes.func
}

export default PhotosCard