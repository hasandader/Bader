import React, { useCallback, useEffect, useState } from 'react';
import { View, I18nManager, Image, StatusBar, ScrollView, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Button from '../../components/Button/index';
import Header from '../../components/Header/index';
import GeneralCard from '../../components/Card/index';
import LinearGradient from 'react-native-linear-gradient';
import { menu, barChart, calendar, downArrow } from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import { deviceWidth, deviceHeight, isPlatformIos, isDark } from '../../lib/utility';
import { fonts } from '../../theme/fonts';
import DatePicker from 'react-native-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { getFinancialStatement } from '../../redux/actions/financialStatement';
import { getRealEstates } from '../../redux/actions/realEstates';

export default function FinancialStatement(props) {

    const token = useSelector(state => state.auth.token);
    const financialReport = useSelector(state => state.financialStatement.financialStatement);
    const realEstate = useSelector(state => state.realEstates.realEstates);
    const loadings = useSelector(state => state.ui.isLoading);

    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [debit, setDebit] = useState(null);
    const [credit, setCredit] = useState(null);
    const [total, setTotal] = useState(null);
    const [details, setDetails] = useState(null);
    const [dropList, setDropList] = useState(false);
    const [selectedState, setSelectedState] = useState('العقار');
    const [selectedID, setSelectedID] = useState(null);

    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    const englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /-/g];
    function fixNumbers(str) {
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return str;
    };


    const dispatch = useDispatch();

    const realEstatesHandler = useCallback(() => {
        dispatch(getRealEstates(token));
    }, [dispatch]);

    useEffect(() => {
        realEstatesHandler();
    }, []);

    const financialReportHandler = useCallback(() => {
        dispatch(getFinancialStatement(token, fixNumbers(endDate), fixNumbers(startDate), selectedID));
    }, [dispatch, endDate, startDate, selectedID]);

    useEffect(() => {
        if (financialReport) {
            console.log('financial report: ', financialReport);
            setDetails(financialReport.data.reverse());
            setDebit(financialReport.main.total_debit);
            setCredit(financialReport.main.total_credit);
            setTotal(financialReport.main.total_income);
        }
    }, [financialReport]);

    console.log('realEstate realEstate: ', realEstate);

    return (
        <>
            <Header
                leftButton={menu}
                title='كشف مالي'
                headerStyle={styles.headerStyle}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <ScrollView contentContainerStyle={styles.flatListContainer}>
                    <GeneralCard
                        containerStyle={styles.cardMargins}
                        children={
                            <View>
                                <View style={styles.row}>
                                    <Text children='كشف حساب مالي' style={styles.title} transform={[{ translateY: 5 }]} />
                                    <View style={[styles.iconWraper]}>
                                        <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                            <Image source={barChart} style={styles.chartIcon} />
                                        </LinearGradient>
                                    </View>
                                </View>
                                <View style={styles.divider} />
                                <View style={styles.datesView}>
                                    <View style={styles.btnWraper}>
                                        <Button
                                            style={styles.button}
                                            title='فرز'
                                            titleStyle={styles.btnTitle}
                                            onPress={() => financialReportHandler()}
                                        />
                                    </View>
                                    <View style={styles.datesWraper}>
                                        <Text children='إلى تاريخ' fontFamily={fonts.regular} fontSize={14} color={primaryColors.black} />
                                        <DatePicker
                                            style={styles.rectangle}
                                            date={endDate}
                                            mode="date"
                                            placeholder="اختر تاريخ"
                                            format="YYYY-MM-DD"
                                            confirmBtnText="تم"
                                            cancelBtnText="الغاء"
                                            iconComponent={
                                                <View style={[styles.circle, styles.dateCircle]}>
                                                    <Image source={calendar} style={[styles.calenderIcon, I18nManager.isRTL ? { right: 0, marginRight: 0 } : { left: 0, marginLeft: 0 }]} resizeMode='contain' />
                                                </View>
                                            }
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    borderWidth: 0,
                                                    alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end',
                                                },
                                                placeholderText: {
                                                    alignSelf: 'center',
                                                    fontFamily: fonts.medium,
                                                    fontSize: 14,
                                                    color: primaryColors.kaitoke,
                                                    paddingTop: isPlatformIos() ? 4 : 0,
                                                    marginRight: isPlatformIos() ? 5 : 0,
                                                    paddingBottom: isPlatformIos() ? 2 : 6
                                                },
                                                dateText: {
                                                    fontFamily: fonts.bold,
                                                    fontSize: 14,
                                                    color: primaryColors.kaitoke,
                                                    paddingTop: isPlatformIos() ? 4 : 0,
                                                    marginRight: 5,
                                                    paddingBottom: isPlatformIos() ? 2 : 6
                                                },
                                                datePicker: {
                                                    backgroundColor: isDark() ? primaryColors.black
                                                        : primaryColors.white
                                                },
                                                datePickerCon: {
                                                    // backgroundColor: primaryColors.black
                                                }
                                            }}
                                            onDateChange={(date) => { setEndDate(date); }}
                                        />
                                    </View>
                                    <View style={styles.datesWraper}>
                                        <Text children='من تاريخ' fontFamily={fonts.regular} fontSize={14} color={primaryColors.black} />
                                        <DatePicker
                                            style={styles.rectangle}
                                            useNativeDriver={true}
                                            date={startDate}
                                            mode="date"
                                            placeholder="اختر تاريخ"
                                            format="YYYY-MM-DD"
                                            confirmBtnText="تم"
                                            cancelBtnText="الغاء"
                                            iconComponent={
                                                <View style={[styles.circle, styles.dateCircle]}>
                                                    <Image source={calendar} style={[styles.calenderIcon, I18nManager.isRTL ? { right: 0, marginRight: 0 } : { left: 0, marginLeft: 0 }]} resizeMode='contain' />
                                                </View>
                                            }
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    borderWidth: 0,
                                                    alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end',
                                                },
                                                placeholderText: {
                                                    alignSelf: 'center',
                                                    fontFamily: fonts.medium,
                                                    fontSize: 14,
                                                    color: primaryColors.kaitoke,
                                                    paddingTop: isPlatformIos() ? 4 : 0,
                                                    marginRight: isPlatformIos() ? 5 : 0,
                                                    paddingBottom: isPlatformIos() ? 2 : 6
                                                },
                                                dateText: {
                                                    fontFamily: fonts.bold,
                                                    fontSize: 14,
                                                    color: primaryColors.kaitoke,
                                                    paddingTop: isPlatformIos() ? 4 : 0,
                                                    marginRight: 5,
                                                    paddingBottom: isPlatformIos() ? 2 : 6
                                                },
                                                datePicker: {
                                                    backgroundColor: isDark() ? primaryColors.black
                                                        : primaryColors.white
                                                },
                                            }}
                                            onDateChange={(date) => { setStartDate(date); }}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.dropDown} onPress={() => setDropList(!dropList)}>
                                    <Image source={downArrow} style={{ width: 12, height: 7 }} />
                                    <Text children={selectedState} size={15} fontFamily={fonts.medium} color={primaryColors.kaitoke} />
                                </TouchableOpacity>
                                {
                                    dropList &&
                                    <FlatList
                                        data={realEstate.properties}
                                        style={styles.dropdownList}
                                        ListHeaderComponent={() => (
                                            <TouchableOpacity style={styles.listItem}
                                                activeOpacity={0.5}
                                                onPress={() => {
                                                    setSelectedState('العقار');
                                                    setSelectedID(null);
                                                    setDropList(!dropList);
                                                }}
                                            >
                                                <Text children='الكل' fontFamily={fonts.regular} />
                                            </TouchableOpacity>
                                        )}
                                        renderItem={({ item, index }) => (
                                            <TouchableOpacity style={[
                                                styles.listItem,
                                                index == realEstate.properties.length - 1 && styles.lastItem
                                            ]}
                                                activeOpacity={0.5}
                                                onPress={() => {
                                                    setSelectedState(item.propertyName);
                                                    setSelectedID(item.propertyId);
                                                    setDropList(!dropList);
                                                }}
                                            >
                                                <Text children={item.propertyName} fontFamily={fonts.regular} />
                                            </TouchableOpacity>
                                        )}
                                    />
                                }
                                <Button
                                    style={styles.textBtn}
                                    title='عرض سندات الصرف'
                                    titleStyle={styles.btnTxt}
                                    onPress={() => { props.navigation.navigate('OutgoingsDocs') }}
                                />
                                {
                                    loadings.includes('financialReport') ?
                                        <View style={styles.activityIndicator}>
                                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                                        </View>
                                        :
                                        <>
                                            {
                                                details &&
                                                <>
                                                    <View style={styles.divider} />
                                                    <View style={styles.textWraper}>
                                                        <View>
                                                            <View style={styles.titleDesc}>
                                                                <Text children='إجمالي المدين' fontSize={15} fontFamily={fonts.bold} color={primaryColors.chateauGreen} align='right' />
                                                                <View style={styles.smallCircle} />
                                                            </View>
                                                            <Text children={`SAR ${parseFloat(debit).toFixed(2)}`} fontFamily={fonts.regular} fontSize={20} color={primaryColors.codGray} />
                                                        </View>
                                                        <View>
                                                            <View style={styles.titleDesc}>
                                                                <Text children='إجمالي الدائن' fontSize={15} fontFamily={fonts.bold} color={primaryColors.redOrange} align='right' />
                                                                <View style={[styles.smallCircle, { backgroundColor: primaryColors.redOrange }]} />
                                                            </View>
                                                            <Text children={`SAR ${parseFloat(credit).toFixed(2)}`} fontFamily={fonts.regular} fontSize={20} color={primaryColors.codGray} />
                                                        </View>
                                                    </View>
                                                    <View style={styles.sideTitleWraper}>
                                                        <View style={[styles.titleDesc, { marginBottom: 0 }]}>
                                                            <Text children='صافي الرصيد' fontSize={15} fontFamily={fonts.medium} color={primaryColors.gray2} align='right' />
                                                            <View style={[styles.smallCircle, { backgroundColor: primaryColors.gray2 }]} />
                                                        </View>
                                                        <Text children={`SAR ${parseFloat(total).toFixed(2)}`} fontSize={18} fontFamily={fonts.enFont} color={primaryColors.treePoppy} align='right' />
                                                    </View>
                                                    <View style={styles.divider} />
                                                </>
                                            }
                                            {
                                                details &&
                                                details.map((item, index) => (
                                                    <GeneralCard
                                                        containerStyle={[styles.detailsCard, index == 0 && { marginTop: 15 }, styles.detailsShadow]}
                                                        children={
                                                            <View style={styles.detailsView}>
                                                                <View style={styles.descWraper} >
                                                                    <Text children={item.date} fontFamily={fonts.bold} fontSize={14} color={primaryColors.gray} align='right' style={{ alignSelf: 'flex-end' }} />
                                                                    <Text children={`${item.statement} `} color={primaryColors.mineShaft} align={I18nManager.isRTL ? 'left' : 'right'} style={{ flex: 1 }} />
                                                                </View>
                                                                <View style={styles.statistics}>
                                                                    <View style={styles.titleDesc}>
                                                                        <Text children={parseFloat(item.debit).toFixed(2)} fontFamily={fonts.medium} fontSize={20} color={primaryColors.gray} lineHeight={25} style={styles.numberMargins} />
                                                                        <Text children='مدين' fontSize={20} fontFamily={fonts.regular} color={primaryColors.chateauGreen} align='right' lineHeight={25} />
                                                                        <View style={styles.smallCircle} />
                                                                    </View>
                                                                    <View style={styles.titleDesc}>
                                                                        <Text children={parseFloat(item.credit).toFixed(2)} fontFamily={fonts.medium} fontSize={20} color={primaryColors.gray} lineHeight={25} style={styles.numberMargins} />
                                                                        <Text children='دائن' fontSize={20} fontFamily={fonts.regular} color={primaryColors.redOrange} align='right' lineHeight={25} />
                                                                        <View style={[styles.smallCircle, { backgroundColor: primaryColors.redOrange }]} />
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        }
                                                    />
                                                ))
                                            }
                                        </>
                                }
                            </View>
                        }
                    />
                </ScrollView>
            </View>
        </>
    );
}
