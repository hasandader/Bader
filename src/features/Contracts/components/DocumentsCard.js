import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './Style';
import Text from '../../../components/Text/index';
import LinearGradient from 'react-native-linear-gradient';
import { id, ticket, priceTag, documents, noteMarker, docDetails, calendar } from '../../../images/index';
import { fonts } from '../../../theme/fonts';
import { primaryColors, gradientColors } from '../../../theme/colors';
import GeneralCard from '../../../components/Card/index';
import Row from '../../../components/Row/index';
import { isPlatformIos } from '../../../lib/utility';

const DocumentsCard = (props) => {
    const {
        type,
        amount,
        containerStyle,
        showAll,
        owner,
        date,
        docDetails,
        onPress,
        header = true,
    } = props;

    return (
        <GeneralCard
            containerStyle={[{ marginRight: 3 }, containerStyle]}
            children={
                <View>
                    {
                        header &&
                        <>
                            <View style={[styles.mainRow, !showAll && { justifyContent: 'flex-end' }]}>
                                {showAll && <TouchableOpacity onPress={onPress} >
                                    <Text children='عرض الكل' size={16} fontFamily={fonts.regular} color={primaryColors.sun} />
                                </TouchableOpacity>}
                                <View style={styles.row}>
                                    <Text children='السندات' style={styles.title} transform={[{ translateY: 5 }]} />
                                    <View style={[styles.iconWraper]}>
                                        <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                            <Image source={documents} style={[styles.mainIcon, { height: 24, width: 22 }]} />
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.divider, styles.updatedDivider, styles.dividerBottom]} />
                        </>}
                    <Row
                        icon={ticket}
                        sideIcon={[styles.largeSideIcon, { width: 40 }]}
                        title='نوع السند'
                        information={type}
                    />
                    <Row
                        icon={priceTag}
                        sideIcon={[styles.largeSideIcon, { height: 50 }]}
                        title='قيمة السند'
                        information={amount}
                    />
                    <Row
                        icon={id}
                        sideIcon={styles.largeSideIcon}
                        title='صاحب السند'
                        information={owner}
                        infoStyle={{ fontSize: 16 }}
                    />
                    <Row
                        icon={noteMarker}
                        sideIcon={styles.largeSideIcon}
                        title='تفاصيل السند'
                        information={docDetails}
                    />
                    <View style={[styles.divider, styles.updatedDivider, styles.dividerBottom]} />
                    <View style={[styles.row, styles.dateRow]}>
                        <View style={[styles.rectangle, styles.dateRectangle]}>
                            <Text children={`${date} م`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                            <View style={[styles.circle, styles.dateCircle]}>
                                <Image source={calendar} style={styles.calenderIcon} />
                            </View>
                        </View>
                        <Text children="تاريخ السند" size={16} color={primaryColors.eclipse} style={styles.rightAlignment} />
                    </View>
                </View>
            }
        />
    )
}

DocumentsCard.propTypes = {

}

export default DocumentsCard