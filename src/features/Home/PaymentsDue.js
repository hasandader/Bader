import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import { menu } from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import DebitsCard from './components/DebitsCard';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstatesContracts } from '../../redux/actions/realEstates';
import { getDuePayments } from '../../redux/actions/financialStatement';

export default function PaymentsDue(props) {

    const token = useSelector(state => state.auth.token);
    const userInfo = useSelector(state => state.auth.userInfo);
    const duePayments = useSelector(state => state.financialStatement.duePayments);
    const estateContracts = useSelector(state => state.realEstates.realEstatesContracts);
    const loadings = useSelector(state => state.ui.isLoading);

    const [allContracts, setAllContracts] = useState(null);
    const [paymentsDue, setPaymentsDue] = useState([]);

    const dispatch = useDispatch();

    const estateContractsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getRealEstatesContracts(token, id));
        dispatch(getDuePayments(token, userInfo.profile.User.id))
    }, []);

    useEffect(() => {
        estateContractsHandler();
    }, []);

    useEffect(() => {
        if (estateContracts) {
            setAllContracts(estateContracts.contracts);
        }

        if (duePayments) {
            setPaymentsDue(duePayments)
        }
    }, [estateContracts, duePayments]);

    return (
        <>
            <Header
                leftButton={menu}
                title='الدفعات المستحقة'
                headerStyle={[styles.headerStyle]}
                back
                onBack={() => props.navigation.goBack()}
                titleStyle={{ fontSize: 30 }}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />


                {
                    paymentsDue.length > 0 &&
                    <FlatList
                        data={paymentsDue}
                        contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList, styles.paymentsDueList, { paddingTop: 10 }]}
                        ListHeaderComponent={() => (
                            loadings.includes('duePayments') &&
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                        )}
                        renderItem={({ item, index }) => {
                            return (
                                <DebitsCard
                                    amount={item.amount}
                                    renterName={item.renter_name}
                                    estateName={item.property_name}
                                    contractNumber={item.contract_number}
                                    date={item.date}
                                    onRenterPress={() => props.navigation.navigate('Renter', {
                                        renterId: item.renter_id
                                    })}
                                    onEstatePress={() => props.navigation.navigate('RealEstateDetails', {
                                        id: item.property_id
                                    })}
                                    onContractPress={() => props.navigation.navigate('ContractDetails', {
                                        id: item.contract_id
                                    })}
                                    cardStyle={styles.debitsVirtical}
                                />
                            );
                        }}
                    />
                }

            </View>
        </>
    );
}
