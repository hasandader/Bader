import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import { ticket, priceTag, stackOverflow, lamp, calendar } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from '../../../components/Row/index';
import Modal from 'react-native-modal';
import { isPlatformIos } from '../../../lib/utility';

const Card = (props) => {
    const {
        isModalVisible,
        onBackdropPress,
        date,
        type,
        value,
        paidAmount,
        status,
        isPaid
    } = props;

    return (
        <Modal isVisible={isModalVisible}
            style={styles.modalStyle}
            onBackdropPress={onBackdropPress}
            backdropOpacity={0.3}
            animationIn='zoomIn'
            animationOut='zoomOut'
        >
            <View style={{ borderWidth: 0 }}>
                <GeneralCard
                    children={
                        <View>
                            <Row
                                icon={ticket}
                                sideIcon={[styles.largeSideIcon, { height: 40 }]}
                                title='نوع الدفعة'
                                information={type}
                                style={styles.rowAlignments}
                            />
                            <Row
                                icon={priceTag}
                                sideIcon={[styles.largeSideIcon, { height: 50 }]}
                                title='قيمة الدفعة'
                                information={value}
                                style={styles.rowAlignments}
                            />
                            <Row
                                icon={stackOverflow}
                                sideIcon={[styles.largeSideIcon, { height: 40 }]}
                                title='المبلغ المسدد'
                                information={paidAmount ? paidAmount : '————'}
                                style={styles.rowAlignments}
                            />
                            <Row
                                icon={lamp}
                                sideIcon={[styles.largeSideIcon]}
                                title='حالة الدفعة'
                                information={status}
                                infoStyle={[isPaid ? { color: primaryColors.malachite } : { color: primaryColors.redOrange }]}
                                style={styles.rowAlignments}
                            />
                            <View style={[styles.divider, styles.updatedDivider]} />
                            <View style={[styles.row, styles.dateRow]}>
                                <View style={[styles.rectangle, styles.dateRectangle]}>
                                    <Text children={`${date}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                    <View style={[styles.circle, styles.dateCircle]}>
                                        <Image source={calendar} style={styles.calenderIcon} />
                                    </View>
                                </View>
                                <Text children="تاريخ السند" size={16} color={primaryColors.eclipse} style={styles.rightAlignment} />
                            </View>
                        </View>
                    }
                />

            </View>
        </Modal>
    )
}

Card.propTypes = {

}

export default Card