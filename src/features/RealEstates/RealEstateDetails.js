import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import Card from './components/Card';
import {
    menu, realEstates, barChart,
    apartments, contracts, outgoings,
} from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { PieChart } from 'react-native-svg-charts';
import GeneralCard from '../../components/Card/index';
import LinearGradient from 'react-native-linear-gradient';
import { deviceHeight } from '../../lib/utility';
import LastCard from './components/LastCard';
import RealEstatesCard from './components/RealEstatesCard';
import ContractsCard from './components/ContractsCard';
import OutgoingsCard from './components/OutgoingsCard';
import PhotosCard from '../../components/PhotosCard';
import ImageModal from '../../components/ImageModal';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstateDetails } from '../../redux/actions/realEstates';

export default function RealEstateDetails(props) {

    const token = useSelector(state => state.auth.token);
    const details = useSelector(state => state.realEstates.realEstateDetails);
    const loadings = useSelector(state => state.ui.isLoading);

    const [estateID, setEstateID] = useState(null);
    const [estateDetails, setEstateDetails] = useState(null);
    const [isImageModal, setIsImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [rentedPercentage, setRentedPercentage] = useState(0);
    const [freePercentage, setFreePercentage] = useState(0);
    const [images, setImages] = useState(null);
    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const detailsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getRealEstateDetails(token, id));
        setEstateID(id);
    }, [dispatch]);

    useEffect(() => {
        detailsHandler();
    }, []);

    useEffect(() => {
        setCount(count + 1);
        if (details) {
            setEstateDetails(details.property);
            if (details.property) {
                if (details.property.rentedUnitsPercentage == 100) {
                    setRentedPercentage(parseInt(details.property.rentedUnitsPercentage));
                } else {
                    setRentedPercentage(parseFloat(details.property.rentedUnitsPercentage).toFixed(2));
                }

                if (details.property.freeUnitsPercentage == 100) {
                    setFreePercentage(parseInt(details.property.freeUnitsPercentage));
                } else {
                    setFreePercentage(parseFloat(details.property.freeUnitsPercentage).toFixed(2));
                }
            }

            if (details.property) {
                if (details.property.images.folders.length > 0 && details.property.images.folders[0].files) {
                    if (details.property.images.folders[0].files.length > 4) {
                        setImages(details.property.images.folders[0].files.slice(0.4));
                    } else {
                        setImages(details.property.images.folders[0].files);
                    }
                }
            }
        }
    }, [details]);

    const rented = [rentedPercentage, 100 - rentedPercentage];
    const empty = [freePercentage, 100 - freePercentage];

    const rentedEstates = rented
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: (index == 0 && rentedPercentage != 0) ? primaryColors.pomegranate : '#e0e0e0',
                onPress: () => console.log('press', value),
            },
            key: `pie-${index}`,
        }))

    const emptyEstates = empty
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: (index == 0 && freePercentage != 0) ? primaryColors.selectiveYellow : '#e0e0e0',
                onPress: () => console.log('press', value),
            },
            key: `pie-${index}`,
        }))


    return (
        <>
            <Header
                leftButton={menu}
                title='العقارات'
                headerStyle={styles.headerStyle}
                back
                onBack={() => props.navigation.goBack()}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <ScrollView contentContainerStyle={[styles.flatListContainer]}>
                    {
                        loadings.includes('realEstateDetails') ?
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                            :
                            estateDetails &&
                            <View>
                                <Card
                                    title={estateDetails.propertyName}
                                    address={estateDetails.propertyAddress}
                                    type={estateDetails.propertyType}
                                    details
                                    buyDate={estateDetails.buy_date}
                                    evaluatingDate={estateDetails.evaluation_date}
                                    mainIcon={realEstates}
                                    colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]}
                                    containerStyle={styles.cardContainer}
                                    activeOpacity={1}
                                    link
                                    onLinkPress={() => props.navigation.navigate('AllRealEstateDetails', {
                                        details: estateDetails
                                    })}
                                />

                                <GeneralCard
                                    containerStyle={{ marginBottom: deviceHeight() * 0.017 }}
                                    children={
                                        <View>
                                            <View style={styles.row}>
                                                <Text children='احصائيات العقار' style={styles.title} transform={[{ translateY: 5 }]} />
                                                <View style={[styles.iconWraper]}>
                                                    <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                        <Image source={barChart} style={styles.chartIcon} />
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                            <View style={styles.divider} />
                                            <View style={[styles.row, styles.updatedRow]}>
                                                <View style={styles.statistics}>
                                                    <View style={[styles.rectangle, { backgroundColor: primaryColors.mintCream, justifyContent: 'space-between' }]}>
                                                        <View style={[styles.circle, { backgroundColor: primaryColors.malachite }, styles.circleStyle]}>
                                                            <Text children={estateDetails.freeUnitsCount} h6 style={styles.numbers} />
                                                        </View>
                                                        <Text children='وحدات شاغرة' fontFamily={fonts.bold} color={primaryColors.malachite} />
                                                    </View>
                                                    <View style={styles.chartWraper}>
                                                        <PieChart style={{ height: 84 }} data={emptyEstates} />
                                                        <Text children={`${freePercentage}%`} style={styles.percentage} size={13} color={primaryColors.black} />
                                                    </View>
                                                </View>
                                                <View style={styles.statistics}>
                                                    <View style={[styles.rectangle, { justifyContent: 'space-between' }]}>
                                                        <View style={[styles.circle, styles.circleStyle]}>
                                                            <Text children={estateDetails.rentedUnitsCount} h6 style={styles.numbers} />
                                                        </View>
                                                        <Text children='وحدات مؤجرة' fontFamily={fonts.bold} color={primaryColors.redOrange} />
                                                    </View>
                                                    <View style={styles.chartWraper}>
                                                        <PieChart style={{ height: 84 }} data={rentedEstates} />
                                                        <Text children={`${rentedPercentage}%`} style={styles.percentage} size={13} color={primaryColors.black} />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    }
                                />

                                {
                                    estateDetails.unitsArray.length > 0 &&
                                    < FlatList
                                        data={estateDetails.unitsArray}
                                        horizontal
                                        contentContainerStyle={[styles.horizontalFlatlist, {}]}
                                        ListFooterComponent={
                                            <LastCard
                                                title='الوحدات العقارية'
                                                topIcon={apartments}
                                                buttonText='عرض كل الوحدات'
                                                onPress={() => props.navigation.navigate('UnitDetails', {
                                                    id: estateID
                                                })}
                                            />
                                        }
                                        renderItem={({ item, index }) => {
                                            return (
                                                <RealEstatesCard
                                                    header
                                                    item={item}
                                                    onPress={() => props.navigation.navigate('UnitDetails', {
                                                        id: estateID
                                                    })}
                                                />
                                            );
                                        }}
                                    />
                                }

                                {
                                    estateDetails.contracts.length > 0 &&
                                    <FlatList
                                        data={estateDetails.contracts}
                                        horizontal
                                        contentContainerStyle={styles.horizontalFlatlist}
                                        ListFooterComponent={
                                            <LastCard
                                                title='عقود الايجار'
                                                topIcon={contracts}
                                                buttonText='عرض كل العقود'
                                                onPress={() => props.navigation.navigate('ContractsList', {
                                                    id: estateID
                                                })}
                                            />
                                        }
                                        renderItem={({ item, index }) => {
                                            return (
                                                <ContractsCard
                                                    header
                                                    item={item}
                                                    onPress={() => props.navigation.navigate('ContractsList', {
                                                        id: estateID
                                                    })}
                                                    activeOpacity={0.5}
                                                    onContractPress={() => props.navigation.navigate('ContractDetails', {
                                                        id: item.contractId
                                                    })}
                                                />
                                            );
                                        }}
                                    />
                                }

                                {
                                    estateDetails.expenses.length > 0 &&
                                    <FlatList
                                        data={estateDetails.expenses}
                                        horizontal
                                        contentContainerStyle={styles.horizontalFlatlist}
                                        ListFooterComponent={
                                            <LastCard
                                                title='المصروفات'
                                                topIcon={outgoings}
                                                iconStyle={{ width: 34, height: 17 }}
                                                buttonText='عرض كل المصروفات'
                                                onPress={() => props.navigation.navigate('OutgoingsList', {
                                                    id: estateID
                                                })}
                                            />
                                        }
                                        renderItem={({ item, index }) => {
                                            return (
                                                <OutgoingsCard
                                                    item={item}
                                                    onPress={() => props.navigation.navigate('OutgoingsList', {
                                                        id: estateID
                                                    })}
                                                    header
                                                />
                                            );
                                        }}
                                    />}

                                {
                                    images &&
                                    <PhotosCard
                                        header
                                        images={estateDetails && images}
                                        onPress={() => props.navigation.navigate('PhotosList', {
                                            images: estateDetails.images.folders[0].files
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
                            </View>
                    }
                </ScrollView>
            </View >
        </>
    );
}
