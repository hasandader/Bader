import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, ActivityIndicator } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import Card from './components/Card';
import Input from '../../components/Input/index';
import { menu, realEstates, close, search } from '../../images/index';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstates } from '../../redux/actions/realEstates';
import { gradientColors, primaryColors } from '../../theme/colors';
import { deviceHeight } from '../../lib/utility';
import Text from '../../components/Text/index';

export default function RealEstates(props) {

    const token = useSelector(state => state.auth.token);
    const realEstate = useSelector(state => state.realEstates.realEstates);
    const loadings = useSelector(state => state.ui.isLoading);

    const [initial, setInitial] = useState('');
    const [estates, setEstates] = useState('');
    const [searchTxt, setSearchTxt] = useState('');

    const dispatch = useDispatch();

    const realEstatesHandler = useCallback(() => {
        dispatch(getRealEstates(token));
    }, [dispatch]);

    useEffect(() => {
        realEstatesHandler();
    }, []);

    useEffect(() => {
        console.log('realEstate effect: ', realEstate)
        if (realEstate) {
            setInitial(realEstate.properties);
            setEstates(realEstate.properties);
        }
    }, [realEstate]);

    function filter(searchedText) {
        setSearchTxt(searchedText);
        const newData = initial.filter((data) => {
            const name = data.propertyName.toLowerCase()
            const text = searchedText.toLowerCase()
            return name.indexOf(text) > -1
        })
        setEstates(newData);
    }

    return (
        <>
            <Header
                leftButton={menu}
                title='العقارات'
                headerStyle={styles.headerStyle}
            />
            <View style={[styles.container, { paddingTop: 10 }]}>
                <StatusBar barStyle="light-content" />

                <Input
                    containerStyle={[styles.searchInput, styles.shadow]}
                    placeholder='إبحث باسم العقار'
                    onChangeText={(value) => filter(value)}
                    value={searchTxt}
                    leftIcon={searchTxt ? close : search}
                    leftIconStyle={styles.closehIcon}
                    activeOpacity={0.5}
                    inputTxtStyle={styles.inputText}
                    onLeftIconPress={() => { searchTxt && filter('') }}
                />
                {
                    loadings.includes('realEstates') ?
                        <View style={styles.activityIndicator}>
                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                        </View>
                        :
                        estates.length > 0 ?
                            <FlatList
                                data={estates}
                                style={styles.flatList}
                                contentContainerStyle={[styles.flatListContainer, { paddingTop: deviceHeight() * 0.013 }]}
                                renderItem={({ item, index }) => {
                                    return (
                                        <Card
                                            activeOpacity={0.6}
                                            title={item.propertyName}
                                            address={item.propertyAddress}
                                            type={item.propertyType}
                                            rented={item.rentedUnitsCount}
                                            empty={item.freeUnitsCount}
                                            mainIcon={realEstates}
                                            colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]}
                                            containerStyle={styles.cardContainer}
                                            circleStyle={styles.circleStyle}
                                            onPress={() => props.navigation.navigate('RealEstateDetails', {
                                                id: item.propertyId
                                            })}
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
