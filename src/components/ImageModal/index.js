import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View, Modal } from 'react-native';
import styles from './Style';
import FastImage from 'react-native-fast-image';
import { close } from '../../images/index';

const ImageModal = (props) => {
    const {
        onClose,
        selectedImage,
        isImageModal
    } = props;

    return (
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={isImageModal}
            onRequestClose={onClose}
        >
            <View style={styles.modelStyle}>
                <FastImage
                    style={styles.fullImageStyle}
                    source={{ uri: selectedImage }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.closeButtonStyle}
                    onPress={onClose}>
                    <Image
                        source={close}
                        style={styles.closeBtn}
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

ImageModal.propTypes = {
    onClose: PropTypes.func,
    selectedImage: PropTypes.any,
    isImageModal: PropTypes.bool
}

export default ImageModal