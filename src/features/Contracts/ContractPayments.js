import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StatusBar, ScrollView } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, contracts } from '../../images/index';
import { gradientColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import PaymentsCard from './components/PaymentsCard';
import PaymentsModal from './components/PaymentsModal';

export default function ContractPayments(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [payments, setPayments] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const data = props.navigation.getParam('data');
        setPayments(data);
    }, []);

    function findPayment(id) {
        setIsModalVisible(true);

        const details = payments.find(item => (
            item.id == id
        ));

        setPaymentData(details);

    }

    return (
        <View style={[styles.container,]}>
            <StatusBar barStyle="light-content" />
            <Header
                leftButton={menu}
                title='العقود'
                headerStyle={[styles.headerStyle, { backgroundColor: '#fff', }]}
                back
                onBack={() => props.navigation.goBack()}
                bottom={<View>
                    <View style={[styles.mainRow, { justifyContent: 'flex-end' }]}>
                        {/* <Button
                            style={{ width: deviceWidth() * 0.18, backgroundColor: 'transparent', marginLeft: deviceWidth() * 0.07 }}
                            title='فلترة'
                            titleStyle={{ fontFamily: fonts.regular, fontSize: 20, color: primaryColors.sun }}
                            image={filter}
                            imageStyle={{ width: 24, height: 35 }}
                        /> */}
                        <View style={styles.row}>
                            <Text children='دفعات العقد' style={styles.title} transform={[{ translateY: 5 }]} />
                            <View style={[styles.iconWraper]}>
                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                    <Image source={contracts} style={styles.chartIcon} />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>}
                whiteArea
            />

            <ScrollView style={styles.listWraper}>
                <PaymentsCard
                    payments={payments}
                    containerStyle={[styles.updatedFlatList, styles.horizontalFlatlist, styles.paymentsList, styles.padding]}
                    onLongPress={(id) => findPayment(id)}
                />

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
            </ScrollView>

        </View>
    );
}
