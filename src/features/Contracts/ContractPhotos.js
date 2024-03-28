import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, imageIcon, test1, test2 } from '../../images/index';
import { primaryColors, gradientColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import PhotosCard from '../../components/PhotosCard/index';
import ImageModal from '../../components/ImageModal';

export default function ContractPhotos(props) {

    const [images, setImages] = useState(null);
    const [imageGroups, setImageGroups] = useState([]);

    useEffect(() => {
        const photos = props.navigation.getParam('images');
        setImages(photos);
        let imageGroups = [];

        for (let i = 0; i < photos.length; i = i + 4) {
            let group = [];
            for (let j = i; j < i + 4; j++) {
                group.push(photos[j])
            }
            imageGroups.push({ id: i, images: group });
            setImageGroups(imageGroups);
            group = [];
        }
    }, []);

    const [isImageModal, setIsImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <View style={[styles.container,]}>
            <StatusBar barStyle="light-content" />
            <Header
                leftButton={menu}
                title='العقود'
                headerStyle={[styles.headerStyle, { backgroundColor: '#fff', }]}
                back
                onBack={() => props.navigation.goBack()}
                bottom={<View>
                    <View style={styles.row}>
                        <Text children='الصور' style={styles.title} transform={[{ translateY: 5 }]} />
                        <View style={[styles.iconWraper]}>
                            <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                <Image source={imageIcon} style={[styles.chartIcon, { width: 26, height: 26 }]} />
                            </LinearGradient>
                        </View>
                    </View>
                </View>}
                whiteArea
            />

            <FlatList
                data={imageGroups}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                renderItem={({ item }) => (
                    <PhotosCard
                        images={item.images}
                        onImagePress={(item) => {
                            setIsImageModal(true);
                            setSelectedImage(item.full_src);
                        }}
                    />
                )}
            />

            <ImageModal
                selectedImage={selectedImage}
                isImageModal={isImageModal}
                onClose={() => {
                    setIsImageModal(false);
                    setSelectedImage(null);
                }}
            />

        </View>
    );
}
