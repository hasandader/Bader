import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StatusBar, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import Row from '../../components/Row/index';
import {
    menu, contracts, noteMarker, priceTag, calendar, folder,
    id, id2, realEstates, apartments, outgoings, documents
} from '../../images/index';
import GeneralCard from '../../components/Card/index';
import { primaryColors, gradientColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../theme/fonts';
import { isPlatformIos, deviceHeight, deviceWidth } from '../../lib/utility';
import PaymentsCard from './components/PaymentsCard';
import OutgoingsCard from './components/OutgoingsCard';
import DocumentsCard from './components/DocumentsCard';
import PhotosCard from '../../components/PhotosCard';
import ImageModal from '../../components/ImageModal';
import PaymentsModal from './components/PaymentsModal';
import { useSelector, useDispatch } from 'react-redux';
import { getContractDetails } from '../../redux/actions/contracts';
import moment from '../../lib/Moment';
import LastCard from '../RealEstates/components/LastCard';

export default function ContractDetails(props) {

    const token = useSelector(state => state.auth.token);
    const details = useSelector(state => state.contracts.contractDetails);
    const loadings = useSelector(state => state.ui.isLoading);

    const [isImageModal, setIsImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [images, setImages] = useState(null);
    const [contractDetails, setContractDetails] = useState(null);
    const [paymentData, setPaymentData] = useState(null);
    const [payments, setPayments] = useState(null);
    const [expenses, setExpenses] = useState(null);
    const [vouchers, setVouchers] = useState(null);

    const dispatch = useDispatch();

    const detailsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getContractDetails(token, id));
    }, [dispatch]);

    useEffect(() => {
        detailsHandler();
    }, []);

    useEffect(() => {
        console.log('contract details: ', details)
        if (details) {
            setContractDetails(details);
            if (details.payments.length > 5) {
                setPayments(details.payments.slice(0, 5));
            } else {
                setPayments(details.payments);
            }

            if (details.expensesData.length > 5) {
                setExpenses(details.expensesData.slice(0, 5));
            } else {
                setExpenses(details.expensesData);
            }

            if (details.vouchers.length > 5) {
                setVouchers(details.vouchers.slice(0, 5));
            } else {
                setVouchers(details.vouchers);
            }

            if (details.images.folders.length > 0 && details.images.folders[0].files) {
                if (details.images.folders[0].files.length > 4) {
                    setImages(details.images.folders[0].files.slice(0.4));
                } else {
                    setImages(details.images.folders[0].files);
                }
            }
        }
    }, [details]);

    function findPayment(id) {
        setIsModalVisible(true);

        const details = contractDetails.payments.find(item => (
            item.id == id
        ));

        setPaymentData(details);

    }

    return (
        <>
            <Header
                leftButton={menu}
                title='العقود'
                headerStyle={styles.headerStyle}
                back
                onBack={() => props.navigation.goBack()}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <ScrollView contentContainerStyle={[styles.flatListContainer]}>
                    {
                        loadings.includes('contractDetails') ?
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                            :
                            contractDetails &&
                            <View>
                                <GeneralCard
                                    containerStyle={styles.cardStyle}
                                    children={
                                        <View>
                                            <View style={styles.row}>
                                                <Text children='بيانات العقد' style={styles.title} />
                                                <View style={[styles.iconWraper]}>
                                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                        <Image source={contracts} style={styles.mainIcon} />
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={[styles.divider, styles.updatedDivider, { marginBottom: 8 }]} />
                                            <Row
                                                icon={noteMarker}
                                                sideIcon={styles.largeSideIcon}
                                                title="رقم العقد"
                                                information={contractDetails.modelDetails.contractNumber}
                                                style={styles.rowAlignments}
                                            />
                                            <Row
                                                icon={priceTag}
                                                sideIcon={[styles.largeSideIcon, { height: 50 }]}
                                                title="قيمة العقد"
                                                information={contractDetails.modelDetails.contractPrice}
                                                style={styles.rowAlignments}
                                            />
                                            <View style={[styles.divider, styles.updatedDivider]} />
                                            <View style={[styles.row, styles.updatedRow]}>
                                                <View>
                                                    <Text children='نهاية الإيجار' style={styles.subTitle} color={primaryColors.doveGray} />
                                                    <View style={[styles.rectangle, styles.dateRectangle]}>
                                                        <Text children={`${contractDetails.modelDetails.contractEndDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                        <View style={[styles.circle, styles.dateCircle]}>
                                                            <Image source={calendar} style={styles.calenderIcon} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View>
                                                    <Text children='بداية الإيجار' style={styles.subTitle} color={primaryColors.doveGray} />
                                                    <View style={[styles.rectangle, styles.dateRectangle]}>
                                                        <Text children={`${contractDetails.modelDetails.contractStartDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
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
                                    containerStyle={styles.cardStyle}
                                    children={
                                        <View>
                                            <View style={styles.row}>
                                                <Text children='بيانات إضافية' style={styles.title} />
                                                <View style={[styles.iconWraper]}>
                                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                        <Image source={folder} style={{ height: 20, width: 24 }} />
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={[styles.divider, styles.updatedDivider, { marginBottom: 8 }]} />
                                            <Row
                                                icon={id}
                                                sideIcon={styles.largeSideIcon}
                                                title="اسم المالك"
                                                information={contractDetails.modelDetails.propertyOwnerName}
                                                infoStyle={{ fontSize: 16 }}
                                            />
                                            <Row
                                                icon={id2}
                                                sideIcon={[styles.largeSideIcon, { height: 50 }]}
                                                title="اسم المستأجر"
                                                information={contractDetails.modelDetails.renterName}
                                                infoStyle={{ fontSize: 16 }}
                                                activeOpacity={0.5}
                                                onPress={() => props.navigation.navigate('Renter', {
                                                    renterId: contractDetails.model.renter
                                                })}
                                            />
                                            <Row
                                                icon={realEstates}
                                                sideIcon={[styles.iconStyle]}
                                                title="اسم العقار"
                                                information={contractDetails.modelDetails.propertyName}
                                                style={{ marginBottom: 10 }}
                                                onPress={() => props.navigation.navigate('RealEstateDetails', {
                                                    id: contractDetails.model.propertyId
                                                })}
                                            />
                                            <Row
                                                icon={apartments}
                                                sideIcon={[styles.iconStyle]}
                                                title="رقم الوحدة"
                                                information={contractDetails.modelDetails.unitNumber}
                                            />
                                        </View>
                                    }
                                />

                                {
                                    contractDetails.payments.length > 0 &&
                                    <PaymentsCard
                                        header
                                        payments={payments && payments}
                                        containerStyle={styles.cardStyle}
                                        showAll
                                        onLongPress={(id) => findPayment(id)}
                                        onPress={() => props.navigation.navigate('ContractPayments', {
                                            data: contractDetails.payments
                                        })}
                                    />
                                }

                                {contractDetails.expensesData.length > 0 &&

                                    < FlatList
                                        data={expenses}
                                        horizontal
                                        contentContainerStyle={[styles.horizontalFlatlist]}
                                        ListFooterComponent={
                                            <LastCard
                                                title='المصروفات'
                                                topIcon={outgoings}
                                                iconStyle={{ width: 33, height: 16 }}
                                                buttonCenter={{ height: 90, width: 90, }}
                                                circleBtnWraper={{ width: 110, height: 110 }}
                                                fontSize={16}
                                                buttonText='عرض الكل'
                                                onPress={() => props.navigation.navigate('ContractOutgoings', {
                                                    outgoings: contractDetails.expensesData
                                                })}
                                            />
                                        }
                                        renderItem={({ item, index }) => {
                                            return (
                                                <OutgoingsCard
                                                    showAll
                                                    title='نوع المصروف'
                                                    secondTitle='قيمة المصروف'
                                                    type={item.label}
                                                    amount={parseFloat(item.value).toFixed(2)}
                                                    infoStyle={{ height: 30, width: deviceWidth() * 0.24 }}
                                                    ellipsizeMode='tail'
                                                    numberOfLines={1}
                                                    onPress={() => props.navigation.navigate('ContractOutgoings', {
                                                        outgoings: contractDetails.expensesData
                                                    })}
                                                />
                                            );
                                        }}
                                    />
                                }

                                {
                                    contractDetails.vouchers.length > 0 &&

                                    < FlatList
                                        data={vouchers}
                                        horizontal
                                        contentContainerStyle={[styles.horizontalFlatlist]}
                                        ListFooterComponent={
                                            <LastCard
                                                title='السندات'
                                                topIcon={documents}
                                                iconStyle={{ width: 23, height: 24 }}
                                                buttonText='عرض كل السندات'
                                                onPress={() => props.navigation.navigate('ContractDocuments', {
                                                    vouchers: contractDetails.vouchers
                                                })}
                                            />
                                        }
                                        renderItem={({ item, index }) => {
                                            return (
                                                <DocumentsCard
                                                    showAll
                                                    data={item}
                                                    type={item.type_text}
                                                    amount={item.amount}
                                                    owner={item.person}
                                                    docDetails={item.voucher_type_text}
                                                    date={moment(item.created_at).format("YYYY-MM-DD")}
                                                    onPress={() => props.navigation.navigate('ContractDocuments', {
                                                        vouchers: contractDetails.vouchers
                                                    })}
                                                />
                                            );
                                        }}
                                    />
                                }

                                {
                                    images &&
                                    <PhotosCard
                                        header
                                        images={contractDetails && images}
                                        onPress={() => props.navigation.navigate('ContractPhotos', {
                                            images: details.property.images.folders[0].files
                                        })}
                                        onImagePress={(item) => {
                                            setIsImageModal(true);
                                            setSelectedImage(item.full_src);
                                        }}
                                    />
                                }

                                <ImageModal
                                    selectedImage={selectedImage}
                                    isImageModal={isImageModal}
                                    onClose={() => {
                                        setIsImageModal(false);
                                        setSelectedImage(null);
                                    }}
                                />

                                {
                                    contractDetails.payments.length > 0 &&
                                    <PaymentsModal
                                        isModalVisible={isModalVisible}
                                        onBackdropPress={() => setIsModalVisible(false)}
                                        type={paymentData && paymentData.type}
                                        value={paymentData && paymentData.paymentAmount}
                                        paidAmount={paymentData && paymentData.paidAmount}
                                        status={paymentData && paymentData.isPaid ? 'مسددة' : 'مستحق'}
                                        date={paymentData && paymentData.paymentDate}
                                        isPaid={paymentData && paymentData.isPaid}
                                    />
                                }
                            </View>
                    }
                </ScrollView>
            </View>
        </>
    );
}
