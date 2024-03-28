import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Image, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import CustomText from '../../components/Text/index';
import GeneralCard from '../../components/Card/index';
import DebitsCard from './components/DebitsCard';
import LastCard from '../../features/RealEstates/components/LastCard';
import CustomLinearGradient from 'react-native-linear-gradient';
import { gradientColors, primaryColors } from '../../theme/colors';
import { menu, barChart, outgoings, contracts } from '../../images/index';
import { LineChart, BarChart } from 'react-native-svg-charts'
import { Defs, Stop, Circle, LinearGradient, Text } from 'react-native-svg'
import * as shape from 'd3-shape'
import { deviceWidth, deviceHeight } from '../../lib/utility';
import { fonts } from '../../theme/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { getFinancialStatistics, getStatistics } from '../../redux/actions/statistics';
import { getDuePayments } from '../../redux/actions/financialStatement';

export default function Home(props) {

    const token = useSelector(state => state.auth.token);
    const userInfo = useSelector(state => state.auth.userInfo);
    const duePayments = useSelector(state => state.financialStatement.duePayments);
    const financialStatistics = useSelector(state => state.statistics.financialStatistics);
    const statistics = useSelector(state => state.statistics.statistics);
    const loadings = useSelector(state => state.ui.isLoading);

    const [debitData, setDebitData] = useState([]);
    const [creditData, setCreditData] = useState([]);
    const [estatesCount, setEstatesCount] = useState([]);
    const [contractsCount, setContractsCount] = useState([]);
    const [renterCount, setRenterCount] = useState([]);
    const [threeValuesSum, setThreeValuesSum] = useState(0); // estates, contracts & renters
    const [totalDebit, setTotalDebit] = useState([]);
    const [totalCredit, setTotalCredit] = useState([]);
    const [debitCreditBalance, setDebitCreditBalance] = useState([]);
    const [paymentsDue, setPaymentsDue] = useState([]);

    const dispatch = useDispatch();

    const financialStatisticsHandler = useCallback(() => {
        dispatch(getFinancialStatistics(token));
        dispatch(getStatistics(token));
        dispatch(getDuePayments(token, userInfo.profile.User.id, 4))
    }, [dispatch]);

    useEffect(() => {
        financialStatisticsHandler();
    }, []);

    useEffect(() => {
        if (financialStatistics) {
            if (financialStatistics.message) {

            } else {
                let debitNumbers = [];
                let creditNumbers = [];
                for (let i = 0; i < financialStatistics[0].debits.length; i++) {
                    debitNumbers[i] = parseFloat(financialStatistics[0].debits[i]);
                }
                for (let i = 0; i < financialStatistics[0].credits.length; i++) {
                    creditNumbers[i] = parseFloat(financialStatistics[0].credits[i]);
                }
                setDebitData(debitNumbers);
                setCreditData(creditNumbers);
            }
        }

        if (statistics) {
            if (statistics.message) {

            } else {
                setEstatesCount([parseFloat(statistics.properties_count)]);
                setContractsCount([parseFloat(statistics.contracts_count)]);
                setRenterCount([parseFloat(statistics.renters_count)]);
                setTotalDebit([parseFloat(statistics.total_debit)]);
                setTotalCredit([parseFloat(statistics.total_credit)]);

                let balance = statistics.balance && statistics.balance.replace(/عليه|له/g, "");

                // if (statistics.balance.includes('له')) {
                //     balance = statistics.balance.replace(/له/g, "");
                // } else if (statistics.balance.includes('عليه')) {
                //     balance = statistics.balance.replace(/عليه/g, "");
                // }

                balance = parseFloat(balance).toFixed(2);
                let debits = parseFloat(statistics.total_debit).toFixed(2);
                let credits = parseFloat(statistics.total_credit).toFixed(2);

                console.log('statistics.total_debit: ', statistics.total_debit, statistics.total_credit)

                console.log('balance: ', balance);
                console.log('statistics.balance: ', statistics.balance)

                setDebitCreditBalance([parseFloat(debits), parseFloat(credits), parseFloat(balance)]);

                let sum = 0;
                sum = parseFloat(statistics.properties_count) + parseFloat(statistics.contracts_count) + parseFloat(statistics.renters_count);
                setThreeValuesSum(sum);
            }
        }

        if (duePayments) {
            setPaymentsDue(duePayments);
        }

    }, [financialStatistics, statistics, duePayments]);

    const txtData = ['إجمالى المدين', 'إجمالي الدائن', 'الرصيد الاجمالي']

    const data = [
        {
            data: debitData,
            svg: { stroke: '#4fb85b' },
        },
        {
            data: creditData,
            svg: { stroke: '#ff3131' },
        },
    ]

    const Label1 = ({ x, y, bandwidth, data }) => {

        return estatesCount.map((value, index) => (
            <Text
                key={index}
                x={x(0) + 10}
                y={y(index) + (bandwidth / 2)}
                fontSize="12"
                fontFamily={fonts.regular}
                fill={primaryColors.bunker}
                alignmentBaseline="middle"
            >
                {value}
            </Text>
        ))
    }

    const Label2 = ({ x, y, bandwidth, data }) => (
        contractsCount.map((value, index) => (
            <Text
                key={index}
                x={x(0) + 10}
                y={y(index) + (bandwidth / 2)}
                fontSize={12}
                fontFamily={fonts.regular}
                fill={primaryColors.bunker}
                alignmentBaseline={'middle'}
            >
                {value}
            </Text>
        ))
    )

    const Label3 = ({ x, y, bandwidth, data }) => (
        renterCount.map((value, index) => (
            <Text
                key={index}
                x={x(0) + 10}
                y={y(index) + (bandwidth / 2)}
                fontSize={12}
                fontFamily={fonts.regular}
                fill={primaryColors.bunker}
                alignmentBaseline={'middle'}
            >
                {value}
            </Text>
        ))
    )

    const Decorator1 = ({ x, y, data }) => {
        return debitData.map((value, index) => (
            <Circle
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={6}
                stroke={'#4fb85b'}
                strokeWidth={3}
                fill={'white'}
            />
        ))
    }

    const Decorator2 = ({ x, y, data }) => {
        return creditData.map((value, index) => (
            <Circle
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={6}
                stroke={'#ff3131'}
                strokeWidth={3}
                fill={'white'}
            />
        ))
    }

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'100%'} y2={'0%'}>
                <Stop offset={'0%'} stopColor={primaryColors.salomie} />
                <Stop offset={'80%'} stopColor={primaryColors.treePoppy} />
            </LinearGradient>
        </Defs>
    )

    const Gradient2 = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'#5cf79f'} />
                <Stop offset={'80%'} stopColor={'#4fb85b'} />
            </LinearGradient>
        </Defs>
    )

    const Labels = ({ x, y, bandwidth, data }) => (
        debitCreditBalance && debitCreditBalance.map((value, index) => (
            <>
                <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={y(value) - 10}
                    fontSize={10}
                    fill={'black'}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {value}
                </Text>
                {/* <Text
                    key={index}
                    x={x(index) + (bandwidth / 2)}
                    y={y(0) + 15}
                    fontSize={12}
                    fontFamily={fonts.regular}
                    fill={primaryColors.doveGray}
                    alignmentBaseline={'middle'}
                    textAnchor={'middle'}
                >
                    {txtData[index]}
                </Text> */}
            </>
        ))
    )

    console.log('debitCreditBalance: ', debitCreditBalance);


    console.log('debitData wanted: ', debitData);
    console.log('creditData wanted: ', creditData);
    console.log('estatesCount wanted: ', estatesCount);
    console.log('contractsCount wanted: ', contractsCount);
    console.log('renterCount wanted: ', renterCount);
    console.log('threeValuesSum wanted: ', threeValuesSum);
    console.log('totalDebit wanted: ', totalDebit);
    console.log('totalCredit wanted: ', totalCredit);
    console.log('debitCreditBalance wanted: ', debitCreditBalance);
    console.log('paymentsDue wanted: ', paymentsDue);

    return (
        <>
            <Header
                leftButton={menu}
                title='الرئيسية'
                headerStyle={styles.headerStyle}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />


                <ScrollView contentContainerStyle={styles.flatListContainer}>
                    <GeneralCard
                        children={
                            <View>
                                <View style={styles.row}>
                                    <CustomText children='احصائيات عامة' style={styles.title} transform={[{ translateY: 5 }]} />
                                    <View style={[styles.iconWraper]}>
                                        <CustomLinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                            <Image source={barChart} style={styles.chartIcon} />
                                        </CustomLinearGradient>
                                    </View>
                                </View>
                                <View style={styles.divider} />
                                {
                                    loadings.includes('statistics') ?
                                        <View style={styles.activityIndicator}>
                                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                                        </View>
                                        :
                                        estatesCount.length > 0 && (estatesCount[0] == 0 || contractsCount[0] == 0 || renterCount[0] == 0) ?
                                            <View style={{ backgroundColor: primaryColors.white, height: 200, justifyContent: 'center' }}>
                                                <CustomText children='لا يوجد بيانات بعد' fontSize={20} align='center' />
                                            </View>
                                            :
                                            <>
                                                <CustomText children='عدد العقارات' fontSize={12} color={primaryColors.doveGray} style={styles.customTxt} />
                                                {
                                                    estatesCount.length > 0 &&
                                                    <View style={styles.bar}>
                                                        <BarChart
                                                            style={{ marginRight: 30, marginLeft: 30, width: (estatesCount && threeValuesSum) ? deviceWidth() * (estatesCount[0] / threeValuesSum) : 10 }}
                                                            data={estatesCount}
                                                            horizontal={true}
                                                            svg={{ fill: 'url(#gradient)', }}
                                                            contentInset={{ top: 0, bottom: 0 }}
                                                            spacing={0.2}
                                                            gridMin={0}
                                                        >
                                                            <Gradient />
                                                            <Label1 />
                                                        </BarChart>
                                                    </View>
                                                }
                                                <CustomText children='عدد العقود' fontSize={12} color={primaryColors.doveGray} style={styles.customTxt} />
                                                {
                                                    contractsCount.length > 0 &&
                                                    <View style={styles.bar}>
                                                        <BarChart
                                                            style={{ marginRight: 30, marginLeft: 30, width: (estatesCount && threeValuesSum) ? deviceWidth() * (contractsCount[0] / threeValuesSum) : 10 }}
                                                            data={contractsCount}
                                                            horizontal={true}
                                                            svg={{ fill: 'url(#gradient)', }}
                                                            contentInset={{ top: 0, bottom: 0 }}
                                                            spacing={0.2}
                                                            gridMin={0}
                                                        >
                                                            <Gradient />
                                                            <Label2 />
                                                        </BarChart>
                                                    </View>
                                                }
                                                <CustomText children='عدد المستأجرين' fontSize={12} color={primaryColors.doveGray} style={styles.customTxt} />
                                                {
                                                    renterCount.length > 0 &&
                                                    <View style={styles.bar}>
                                                        <BarChart
                                                            style={{ marginRight: 30, marginLeft: 30, width: (estatesCount && threeValuesSum) ? deviceWidth() * (renterCount[0] / threeValuesSum) : 10 }}
                                                            data={renterCount}
                                                            horizontal={true}
                                                            svg={{ fill: 'url(#gradient)' }}
                                                            contentInset={{ top: 0, bottom: 0 }}
                                                            spacing={0.2}
                                                            gridMin={0}
                                                        >
                                                            <Gradient />
                                                            <Label3 />
                                                        </BarChart>
                                                    </View>
                                                }
                                            </>
                                }
                            </View>
                        }
                    />
                    <GeneralCard
                        containerStyle={styles.secondCard}
                        children={
                            <View>
                                <View style={styles.row}>
                                    <CustomText children='احصائيات مالية' style={styles.title} transform={[{ translateY: 5 }]} />
                                    <View style={[styles.iconWraper]}>
                                        <CustomLinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                            <Image source={barChart} style={styles.chartIcon} />
                                        </CustomLinearGradient>
                                    </View>
                                </View>
                                <View style={styles.divider} />
                                {

                                    loadings.includes('financialStatistics') ?
                                        <View style={styles.activityIndicator}>
                                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                                        </View>
                                        :
                                        (creditData.length > 0 && debitData.length > 0) ?
                                            <LineChart
                                                style={styles.lineChart}
                                                data={data}
                                                svg={{
                                                    stroke: 'rgb(134, 65, 244)',
                                                    strokeWidth: 3
                                                }}
                                                contentInset={{ top: 30, bottom: 15, right: 15, left: 15 }}
                                                curve={shape.curveNatural}
                                            >
                                                <Decorator1 />
                                                <Decorator2 />
                                            </LineChart>
                                            :
                                            <View style={{ backgroundColor: primaryColors.white, height: 200, justifyContent: 'center' }}>
                                                <CustomText children='لا يوجد بيانات بعد' fontSize={20} align='center' />
                                            </View>
                                }
                                <View style={styles.textWraper}>
                                    <View>
                                        <View style={styles.titleDesc}>
                                            <CustomText children='إجمالي المدين' fontSize={15} fontFamily={fonts.bold} color={primaryColors.chateauGreen} align='right' />
                                            <View style={styles.circle} />
                                        </View>
                                        {
                                            totalDebit.length > 0 &&
                                            <CustomText children={`SAR ${parseFloat(totalDebit[0]).toFixed(2)}`} fontFamily={fonts.regular} fontSize={20} color={primaryColors.codGray} />
                                        }
                                    </View>
                                    <View>
                                        <View style={styles.titleDesc}>
                                            <CustomText children='إجمالي الدائن' fontSize={15} fontFamily={fonts.bold} color={primaryColors.redOrange} align='right' />
                                            <View style={[styles.circle, { backgroundColor: primaryColors.redOrange }]} />
                                        </View>
                                        {
                                            totalCredit.length > 0 &&
                                            <CustomText children={`SAR ${parseFloat(totalCredit[0]).toFixed(2)}`} fontFamily={fonts.regular} fontSize={20} color={primaryColors.codGray} />
                                        }
                                    </View>
                                </View>
                                {
                                    loadings.includes('statistics') ?
                                        <View style={styles.activityIndicator}>
                                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                                        </View>
                                        :
                                        debitCreditBalance && (debitCreditBalance[0] == 0 && debitCreditBalance[1] == 0 && debitCreditBalance[2] == 0) ?
                                            <View style={{ backgroundColor: primaryColors.white, height: 200, justifyContent: 'center' }}>
                                                <CustomText children='لا يوجد بيانات بعد' fontSize={20} align='center' />
                                            </View>
                                            :
                                            <>
                                                <View style={styles.virticalBar}>
                                                    <BarChart
                                                        style={{ flex: 1, paddingHorizontal: 30 }}
                                                        data={debitCreditBalance}
                                                        svg={{ fill: 'url(#gradient)' }}
                                                        contentInset={{ top: 15, bottom: 25, right: 20, left: 20 }}
                                                        spacing={0.2}
                                                        gridMin={0}
                                                        spacingInner={0.7} // changing this value controls bar width
                                                    >
                                                        <Gradient2 />
                                                        <Labels />
                                                    </BarChart>
                                                </View>
                                                <View style={styles.barBottomText}>
                                                    <CustomText children='الرصيد الاجمالي' fontSize={12}
                                                        fontFamily={fonts.regular}
                                                        color={primaryColors.doveGray} />
                                                    <CustomText children='إجمالي الدائن' fontSize={12}
                                                        fontFamily={fonts.regular}
                                                        color={primaryColors.doveGray} />
                                                    <CustomText children='إجمالى المدين' fontSize={12}
                                                        fontFamily={fonts.regular}
                                                        color={primaryColors.doveGray} />
                                                </View>
                                            </>
                                }
                            </View>
                        }
                    />

                    {
                        loadings.includes('duePayments') ?
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                            :
                            paymentsDue.length > 0 &&
                            <FlatList
                                data={paymentsDue}
                                horizontal
                                contentContainerStyle={styles.horizontalFlatlist}
                                ListFooterComponent={
                                    <LastCard
                                        title='الدفعات المستحقة'
                                        topIcon={contracts}
                                        iconStyle={{ width: 22, height: 25 }}
                                        buttonText='عرض كل الدفعات المستحقة'
                                        onPress={() => props.navigation.navigate('PaymentsDue')}
                                    />
                                }
                                renderItem={({ item, index }) => {
                                    return (
                                        <DebitsCard
                                            header
                                            amount={item.amount}
                                            renterName={item.renter_name}
                                            estateName={item.property_name}
                                            contractNumber={item.contract_number}
                                            date={item.date}
                                            onPress={() => props.navigation.navigate('PaymentsDue')}
                                            onRenterPress={() => props.navigation.navigate('Renter', {
                                                renterId: item.renter_id
                                            })}
                                            onEstatePress={() => props.navigation.navigate('RealEstateDetails', {
                                                id: item.property_id
                                            })}
                                            onContractPress={() => props.navigation.navigate('ContractDetails', {
                                                id: item.contract_id
                                            })}
                                        />
                                    );
                                }}
                            />}
                </ScrollView>
            </View>
        </>
    );
}
