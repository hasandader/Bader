import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import Text from '../../components/Text/index';
import GeneralCard from '../../components/Card/index';
import Row from '../../components/Row/index';
import PhotosCard from '../../components/PhotosCard/index';
import { menu, circle, userId, calendar, marker, folder } from '../../images/index';
import { useSelector, useDispatch } from 'react-redux';
import { gradientColors, primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { deviceHeight, isPlatformIos, deviceWidth } from '../../lib/utility';
import { getRenterInfo } from '../../redux/actions/renters';
import FastImage from 'react-native-fast-image';
import ImageModal from '../../components/ImageModal';

export default function Renter(props) {

    const token = useSelector(state => state.auth.token);
    const loadings = useSelector(state => state.ui.isLoading);
    const renterInfo = useSelector(state => state.renters.renterInfo);

    const [renterData, setRenterData] = useState([]);
    const [isImageModal, setIsImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const dispatch = useDispatch();

    const renterInfoHandler = useCallback(() => {
        const renterId = props.navigation.getParam('renterId');
        dispatch(getRenterInfo(token, renterId));
    }, [dispatch]);

    useEffect(() => {
        renterInfoHandler();
    }, []);

    useEffect(() => {
        if (renterInfo) {
            setRenterData(renterInfo.renter);
        }
    }, [renterInfo]);

    return (
        <>
            <Header
                leftButton={menu}
                title='المستأجر'
                headerStyle={styles.headerStyle}
                back
                onBack={() => props.navigation.goBack()}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />


                <ScrollView contentContainerStyle={[styles.flatListContainer, { paddingBottom: deviceHeight() * 0.052 }]}>
                    {
                        loadings.includes('renterInfo') ?
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                            :
                            renterData &&
                            <>
                                <GeneralCard
                                    children={
                                        <View>
                                            <View style={styles.row}>
                                                <Text children='بيانات أساسية' style={styles.title} transform={[{ translateY: 5 }]} />
                                                <View style={[styles.iconWraper]}>
                                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                        <Image source={userId} style={[styles.chartIcon, { width: 40, height: 35, top: 2.5 }]} />
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={[styles.divider, styles.updatedDivider]} />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الإسم الحقيقي'
                                                information={renterData.real_name}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='نوع المستأجر'
                                                information={renterData.type}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم الجوال'
                                                information={renterData.mobileNumber}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم جوال آخر'
                                                titleStyle={{ lineHeight: 25 }}
                                                information={renterData.phoneNumber2 || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم الهوية'
                                                information={renterData.personalId}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الرقم الضريبي'
                                                information={renterData.TaxCode || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='إسم المحصل'
                                                information={renterData.collector_id || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الجنسية'
                                                information={renterData.nationality || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الرصيد الإفتتاحي'
                                                information={renterData.initial_balance}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='صورة الهوية'
                                                information={!renterData.id_image_url && '---'}
                                                style={styles.rowAlignments}
                                            />

                                            {
                                                renterData.id_image_url &&
                                                <View style={styles.imageWraper}>
                                                    <TouchableOpacity
                                                        style={styles.images}
                                                        onPress={() => {
                                                            setIsImageModal(true);
                                                            setSelectedImage(renterData.id_image_url);
                                                        }}>
                                                        <FastImage
                                                            style={styles.image}
                                                            source={{ uri: renterData.id_image_url }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                            <View style={[styles.row, styles.dateRow]}>
                                                {
                                                    renterData.birth_date ?
                                                        <View style={[styles.rectangle, styles.dateRectangle, { height: 35, marginTop: 0 }]}>
                                                            <Text children={`${renterData.birth_date} م`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                            <View style={[styles.circle, styles.dateCircle]}>
                                                                <Image source={calendar} style={styles.calenderIcon} />
                                                            </View>
                                                        </View>
                                                        :
                                                        <Text children={`---`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} style={{ marginLeft: deviceWidth() * 0.17 }} />
                                                }
                                                <Text children="تاريخ الميلاد" size={20} color={primaryColors.eclipse} style={styles.rightAlignment} />
                                            </View>

                                            <ImageModal
                                                selectedImage={selectedImage}
                                                isImageModal={isImageModal}
                                                onClose={() => {
                                                    setIsImageModal(false);
                                                    setSelectedImage(null);
                                                }}
                                            />
                                        </View>
                                    }
                                />
                                <GeneralCard
                                    containerStyle={styles.spacingCards}
                                    children={
                                        <View>
                                            <View style={styles.row}>
                                                <Text children='العنوان الوطني' style={styles.title} transform={[{ translateY: 5 }]} />
                                                <View style={[styles.iconWraper]}>
                                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                        <Image source={marker} style={[styles.chartIcon, { width: 40, height: 35, top: 2.5 }]} />
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={[styles.divider, styles.updatedDivider]} />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم المبنى'
                                                information={renterData.buildingNumber || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الرمز البريدي'
                                                information={renterData.TaxCode || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الرقم الإضافي'
                                                information={renterData.AddedNumber || '---'}
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
                                                sideIcon={[styles.sideIcon]}
                                                title='البريد الإلكتروني'
                                                information={renterData.email || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم الحساب'
                                                information={renterData.accountNumber || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم الهاتف'
                                                information={renterData.phone || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='رقم الفاكس'
                                                information={renterData.fax || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='صندوق البريد'
                                                information={renterData.POBox || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='الكفيل'
                                                information={renterData.sponsor_id || '---'}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={circle}
                                                sideIcon={[styles.sideIcon]}
                                                title='العنوان'
                                                information={renterData.address || '---'}
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
