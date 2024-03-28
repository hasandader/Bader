import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, Image, TouchableOpacity, ActivityIndicator, I18nManager } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import Input from '../../components/Input/index';
import Text from '../../components/Text/index';
import Button from '../../components/Button/index';
import GeneralCard from '../../components/Card/index';
import Row from '../../components/Row/index';
import LinearGradient from 'react-native-linear-gradient';
import {
    menu, contracts, search, realEstates,
    apartments, priceTag, total, calendar, close, id
} from '../../images/index';
import { fonts } from '../../theme/fonts';
import { primaryColors, gradientColors } from '../../theme/colors';
import { isPlatformIos, deviceWidth } from '../../lib/utility';
import { useSelector, useDispatch } from 'react-redux';
import { getContracts, getActiveContract } from '../../redux/actions/contracts';

export default function RealEstates(props) {

    const token = useSelector(state => state.auth.token);
    const contract = useSelector(state => state.contracts.contracts);
    const activeContracts = useSelector(state => state.contracts.activeContracts);
    const loadings = useSelector(state => state.ui.isLoading);

    const [initial, setInitial] = useState('');
    const [estateContracts, setEstateContracts] = useState(null);
    const [contractsActive, setContractsActive] = useState(null);
    const [searchTxt, setSearchTxt] = useState('');

    const dispatch = useDispatch();

    const contractsHandler = useCallback(() => {
        dispatch(getContracts(token));
    }, [dispatch]);

    const activeContractsHandler = useCallback(() => {
        dispatch(getActiveContract(token));
    }, [dispatch]);

    useEffect(() => {
        contractsHandler();
    }, []);

    useEffect(() => {
        if (contract) {
            setInitial(contract.contracts);
            setEstateContracts(contract.contracts);
        }
    }, [contract]);

    useEffect(() => {
        if (activeContracts) {
            setInitial(activeContracts);
            setEstateContracts(activeContracts);
        }
    }, [activeContracts]);

    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    function fixNumbers(str) {
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(arabicNumbers[i], i);
            }
        }
        return str;
    };

    function filter(searchedText) {
        setSearchTxt(searchedText);
        let searchedNumber = fixNumbers(searchedText);
        const newData = initial.filter((data) => {
            const name = data.contractNumber.toString().toLowerCase()
            const text = searchedNumber.toString().toLowerCase()
            const renterName = data.renterName.toLowerCase()
            return name.indexOf(text) > -1 || renterName.indexOf(searchedText) > -1
        })
        setEstateContracts(newData);
    }

    console.log('estateContracts: ', estateContracts)

    return (
        <>
            <Header
                leftButton={menu}
                title='العقود'
                headerStyle={styles.headerStyle}
            />
            <View style={[styles.container, { paddingTop: 10 }]}>
                <StatusBar barStyle="light-content" />

                <View style={styles.searchArea}>
                    <Input
                        containerStyle={[styles.searchInput, styles.shadow]}
                        placeholder='اسم المستأجر / رقم العقد'
                        onChangeText={(value) => filter(value)}
                        value={searchTxt}
                        leftIcon={searchTxt ? close : search}
                        leftIconStyle={[styles.closeIcon, { tintColor: primaryColors.fuchsiaPink }]}
                        activeOpacity={0.5}
                        inputTxtStyle={[searchTxt ? styles.inputText : [styles.inputText, { fontSize: 10 }]]}
                        onLeftIconPress={() => { searchTxt && filter('') }}
                    />
                    <Button
                        style={[styles.filterBtn, styles.shadow]}
                        titleStyle={styles.filterTxt}
                        title='فرز العقود الفعالة'
                        onPress={() => activeContractsHandler()}
                    />
                </View>
                {
                    (loadings.includes('contracts') || loadings.includes('getActiveContract')) ?
                        <View style={styles.activityIndicator}>
                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                        </View>
                        :
                        estateContracts != null && estateContracts.length > 0 ?
                            <FlatList
                                data={estateContracts}
                                style={styles.flatList}
                                contentContainerStyle={styles.flatListContainer}
                                renderItem={({ item, index }) => {
                                    return (
                                        <GeneralCard
                                            containerStyle={styles.cardStyle}
                                            children={
                                                <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('ContractDetails', {
                                                    id: item.contractId
                                                })}>
                                                    <View style={styles.mainRow}>
                                                        <Text children={item.contractNumber} style={styles.number} fontFamily={fonts.bold} size={18} color={primaryColors.malachite} />
                                                        <View style={styles.row}>
                                                            <Text children='عقد رقم' style={styles.title} />
                                                            <View style={[styles.iconWraper]}>
                                                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                                                    <Image source={contracts} style={styles.mainIcon} />
                                                                </LinearGradient>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={[styles.divider, styles.updatedDivider]} />
                                                    <Row
                                                        icon={realEstates}
                                                        sideIcon={styles.sideIcon}
                                                        resizeMode='contain'
                                                        title='إسم العقار'
                                                        information={item.propertyName}
                                                        style={[styles.rowStyle, styles.rowBottom]}
                                                        infoStyle={styles.infoStyle}
                                                        infoWraper={styles.infoWraper}
                                                    />
                                                    <Row
                                                        icon={apartments}
                                                        sideIcon={styles.sideIcon}
                                                        resizeMode='contain'
                                                        title='وحدة رقم'
                                                        information={item.unitNumber}
                                                        style={styles.rowStyle}
                                                        infoStyle={styles.infoStyle}
                                                        infoWraper={styles.infoWraper}
                                                    />
                                                    <Row
                                                        icon={id}
                                                        sideIcon={[styles.sideIcon2]}
                                                        resizeMode='contain'
                                                        title='المستأجر'
                                                        information={item.renterName}
                                                        style={[styles.rowStyle, { paddingRight: 0 }]}
                                                        infoStyle={[item.renterName.length > 12 && I18nManager.isRTL ? { left: 5 } : { right: 5 }]}
                                                        infoWraper={[styles.infoWraper, { width: '60%' }]}
                                                    />
                                                    <View style={[styles.divider, styles.updatedDivider]} />
                                                    <Row
                                                        icon={priceTag}
                                                        sideIcon={[styles.sideIcon, { height: 45 }]}
                                                        title='قيمة العقد'
                                                        information={parseFloat(item.contractPrice).toFixed(2)}
                                                        style={[styles.rowStyle, { marginTop: 0 }]}
                                                        infoStyle={styles.infoStyle}
                                                        infoWraper={styles.infoWraper}
                                                    />
                                                    <Row
                                                        icon={total}
                                                        sideIcon={[styles.sideIcon, { height: 40 }]}
                                                        title='إجمالي المحصل'
                                                        information={parseFloat(item.totalReceipts).toFixed(2)}
                                                        style={[styles.rowStyle, { marginTop: 0 }]}
                                                        infoStyle={styles.infoStyle}
                                                        infoWraper={styles.infoWraper}
                                                        titleStyle={styles.titleStyle}
                                                    />
                                                    <View style={[styles.divider, styles.updatedDivider]} />
                                                    <View style={[styles.row, styles.updatedRow]}>
                                                        <View>
                                                            <Text children='نهاية الإيجار' style={styles.subTitle} color={primaryColors.doveGray} />
                                                            <View style={[styles.rectangle, styles.dateRectangle]}>
                                                                <Text children={`${item.contractEndDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                                <View style={[styles.circle, styles.dateCircle]}>
                                                                    <Image source={calendar} style={styles.calenderIcon} />
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            <Text children='بداية الإيجار' style={styles.subTitle} color={primaryColors.doveGray} />
                                                            <View style={[styles.rectangle, styles.dateRectangle]}>
                                                                <Text children={`${item.contractStartDate}`} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 4 }]} />
                                                                <View style={[styles.circle, styles.dateCircle]}>
                                                                    <Image source={calendar} style={styles.calenderIcon} />
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            }
                                        />
                                    );
                                }}
                            />
                            :
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text children='لا يوجد بيانات بعد' fontSize={20} align='center' />
                            </View>
                }
            </View>
        </>
    );
}
