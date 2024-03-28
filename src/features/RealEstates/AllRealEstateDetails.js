import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, ActivityIndicator, Image, ScrollView, TouchableOpacity, I18nManager } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import Text from '../../components/Text/index';
import GeneralCard from '../../components/Card/index';
import Row from '../../components/Row/index';
import { menu, circle, calendar, folder, realEstates, square, selectedSquare } from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { deviceHeight, isPlatformIos, deviceWidth } from '../../lib/utility';
import FastImage from 'react-native-fast-image';
import ImageModal from '../../components/ImageModal';

export default function AllRealEstateDetails(props) {

    const [details, setDetails] = useState(null);
    const [isImageModal, setIsImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const details = props.navigation.getParam('details');
        setDetails(details);
        console.log('details: ', details)
    }, []);


    return (
        <>
            <Header
                leftButton={menu}
                title={details && details.propertyName}
                titleStyle={{ marginRight: 0, marginLeft: 0, width: '80%' }}
                headerStyle={styles.headerStyle}
                back
                onBack={() => props.navigation.goBack()}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />


                <ScrollView contentContainerStyle={[styles.flatListContainer, { paddingBottom: deviceHeight() * 0.052 }]}>
                    {
                        details &&
                        <>
                            <GeneralCard
                                children={
                                    <View>
                                        <View style={styles.row}>
                                            <Text children='بيانات أساسية' style={styles.title} transform={[{ translateY: 5 }]} />
                                            <View style={[styles.iconWraper]}>
                                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                    <Image source={realEstates} style={[styles.chartIcon, { width: 19, height: 27 }]} />
                                                </LinearGradient>
                                            </View>
                                        </View>
                                        <View style={[styles.divider, styles.updatedDivider]} />
                                        <Row
                                            icon={circle}
                                            title='إسم العقار'
                                            information={details.propertyName || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='المحافظة'
                                            information={details.province || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='المدينة'
                                            information={details.city || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='نوع العقار'
                                            titleStyle={{ lineHeight: 25 }}
                                            information={details.propertyType || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم العقار'
                                            information={details.propertyNumber || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='كود العقار'
                                            information={details.propertyCode || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='مساحة العقار'
                                            information={details.propertyArea || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='عمولة إدارة الأملاك'
                                            information={details.propertyPmCommission || '---'}
                                            style={styles.rowAlignments}
                                            titlePartStyle={{ width: '70%' }}
                                            infoWraper={{ width: null, padding: 5 }}
                                        />
                                        <Row
                                            icon={circle}
                                            title='نوع عمولة إدارة الاملاك'
                                            information={details.propertyPmCommissionType || '---'}
                                            style={styles.rowAlignments}
                                            titlePartStyle={{ width: '50%' }}
                                            titleStyle={{ textAlign: I18nManager.isRTL ? 'left' : 'right' }}
                                            infoWraper={{ width: '50%', padding: 5 }}
                                        />
                                        <Row
                                            icon={circle}
                                            title='جالب العقار'
                                            information={details.bringer || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={parseInt(details.is_vat_applied) ? selectedSquare : square}
                                            sideIcon={!parseInt(details.is_vat_applied) && styles.squareIcon}
                                            title='يخضع لضريبة القيمة المضافة'
                                            style={styles.rowAlignments}
                                            titlePartStyle={{ width: null }}
                                        />
                                        <Row
                                            icon={parseInt(details.calculated_as_percentage) ? selectedSquare : square}
                                            sideIcon={!parseInt(details.calculated_as_percentage) && styles.squareIcon}
                                            title='يحتسب كنسبة'
                                            style={styles.rowAlignments}
                                        />

                                        <View style={[styles.row, styles.updatedRow]}>
                                            <View>
                                                <Text children='سنة البناء' style={styles.subTitle} color={primaryColors.doveGray} />
                                                <View style={[styles.rectangle, styles.dateRectangle]}>
                                                    <Text children={`${details.coustruction_date}م`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                    <View style={[styles.circle, styles.dateCircle]}>
                                                        <Image source={calendar} style={styles.calenderIcon} />
                                                    </View>
                                                </View>
                                            </View>
                                            <View>
                                                <Text children='تاريخ جلب العقار' style={styles.subTitle} color={primaryColors.doveGray} />
                                                <View style={[styles.rectangle, styles.dateRectangle]}>
                                                    <Text children={`${details.buy_date}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                    <View style={[styles.circle, styles.dateCircle]}>
                                                        <Image source={calendar} style={styles.calenderIcon} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                }
                            />
                            <GeneralCard
                                containerStyle={styles.spacingCards}
                                children={
                                    <View>
                                        <View style={styles.row}>
                                            <Text children='بيانات الملكية' style={styles.title} transform={[{ translateY: 5 }]} />
                                            <View style={[styles.iconWraper]}>
                                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                    <Image source={realEstates} style={[styles.chartIcon, { width: 19, height: 27 }]} />
                                                </LinearGradient>
                                            </View>
                                        </View>
                                        <View style={[styles.divider, styles.updatedDivider]} />
                                        <Row
                                            icon={circle}
                                            title='إسم المالك'
                                            information={details.ownerName || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم الصك'
                                            information={details.deedNumber || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='حالة الصك'
                                            information={details.deed_status || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم الأرض/ العقار'
                                            information={details.propertyNumber || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='البنك'
                                            information={details.bank || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='صورة الصك'
                                            information={!details.deed_image && '---'}
                                            style={styles.rowAlignments}
                                        />

                                        {
                                            details.deed_image &&
                                            <View style={styles.imageWraper}>
                                                <TouchableOpacity
                                                    style={styles.images}
                                                    onPress={() => {
                                                        setIsImageModal(true);
                                                        setSelectedImage(details.deed_image);
                                                    }}>
                                                    <Image
                                                        style={styles.image}
                                                        source={{ uri: details.deed_image }}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        }

                                        <ImageModal
                                            selectedImage={selectedImage}
                                            isImageModal={isImageModal}
                                            onClose={() => {
                                                setIsImageModal(false);
                                                setSelectedImage(null);
                                            }}
                                        />

                                        <Row
                                            icon={circle}
                                            title='تاريخ الصك'
                                            information={details.deedDate || '---'}
                                            style={styles.rowAlignments}
                                        />

                                    </View>
                                }
                            />
                            <GeneralCard
                                containerStyle={styles.spacingCards}
                                children={
                                    <View>
                                        <View style={styles.row}>
                                            <Text children='بيانات إضافية' style={styles.title} transform={[{ translateY: 5 }]} />
                                            <View style={[styles.iconWraper]}>
                                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                    <Image source={folder} style={[styles.chartIcon, { width: 24, height: 20 }]} />
                                                </LinearGradient>
                                            </View>
                                        </View>
                                        <View style={[styles.divider, styles.updatedDivider]} />
                                        <Row
                                            icon={circle}
                                            title='عدد المصاعد'
                                            information={details.elevators_count || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='عدد الطوابق'
                                            information={details.floors_count || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='عدد المواقف'
                                            information={details.parking_count || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='العنوان الوطني'
                                            information={details.propertyAddress || '---'}
                                            infoStyle={{ fontSize: 12 }}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم حساب الكهرباء'
                                            information={details.electricity_account_number || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم حساب المياه'
                                            information={details.water_account_number || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={parseInt(details.isCommonEntranceCleanlinessExist) ? selectedSquare : square}
                                            sideIcon={!parseInt(details.isCommonEntranceCleanlinessExist) && styles.squareIcon}
                                            title='هل يوجد نظافة للمدخل المشترك أم لا'
                                            // information={!renterData.id_image_url && '---'}
                                            titleStyle={{ fontSize: 18 }}
                                            style={styles.rowAlignments}
                                            titlePartStyle={{ width: null }}
                                        />
                                        <Row
                                            icon={circle}
                                            title='مرافق العقار'
                                            information={details.property_facilities || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='مميزات العقار'
                                            information={details.property_features || '---'}
                                            style={styles.rowAlignments}
                                        />
                                    </View>
                                }
                            />
                            <GeneralCard
                                containerStyle={styles.spacingCards}
                                children={
                                    <View>
                                        <View style={styles.row}>
                                            <Text children='بيانات حارس العمارة' style={styles.title} transform={[{ translateY: 5 }]} />
                                            <View style={[styles.iconWraper]}>
                                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                    <Image source={folder} style={[styles.chartIcon, { width: 24, height: 20 }]} />
                                                </LinearGradient>
                                            </View>
                                        </View>
                                        <View style={[styles.divider, styles.updatedDivider]} />
                                        <Row
                                            icon={circle}
                                            title='اسم الحارس'
                                            information={details.building_guard_name || '---'}
                                            infoStyle={{ fontSize: 14 }}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='رقم الجوال'
                                            information={details.building_guard_mobile || '---'}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={circle}
                                            title='هوية الحارس'
                                            information={details.building_guard_identity_number || '---'}
                                            style={styles.rowAlignments}
                                        />
                                    </View>
                                }
                            />
                        </>
                    }
                </ScrollView>

            </View>
        </>
    );
}
