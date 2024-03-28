import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar, ActivityIndicator } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, contracts } from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import ContractsCard from './components/ContractsCard';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstatesContracts } from '../../redux/actions/realEstates';

const realEstatesData = require('../../data/dummyData/realEstates.json');

export default function ContractsList(props) {

    const token = useSelector(state => state.auth.token);
    const estateContracts = useSelector(state => state.realEstates.realEstatesContracts);
    const loadings = useSelector(state => state.ui.isLoading);

    const [allContracts, setAllContracts] = useState(null);

    const dispatch = useDispatch();

    const estateContractsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getRealEstatesContracts(token, id));
    }, []);

    useEffect(() => {
        estateContractsHandler();
    }, []);

    useEffect(() => {
        if (estateContracts) {
            setAllContracts(estateContracts.contracts);
        }
    }, [estateContracts]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header
                leftButton={menu}
                title='العقارات'
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
                            <Text children='عقود الايجار' style={styles.title} transform={[{ translateY: 5 }]} />
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

            <FlatList
                data={allContracts}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                ListHeaderComponent={() => (
                    loadings.includes('realEstateContracts') &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.jacarta} />
                    </View>
                )}
                renderItem={({ item, index }) => {
                    return (
                        <ContractsCard
                            item={item}
                            virticalCardStyle={styles.virticalCards}
                            activeOpacity={0.5}
                            onContractPress={() => props.navigation.navigate('ContractDetails', {
                                id: item.contractId
                            })}
                        />
                    );
                }}
            />

        </View>
    );
}
