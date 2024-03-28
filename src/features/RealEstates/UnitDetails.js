import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar, ActivityIndicator } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, apartments } from '../../images/index';
import { primaryColors, gradientColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import RealEstatesCard from './components/RealEstatesCard';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstatesUnits } from '../../redux/actions/realEstates';

export default function UnitDetails(props) {

    const token = useSelector(state => state.auth.token);
    const realEstatesUnits = useSelector(state => state.realEstates.realEstatesUnits);
    const loadings = useSelector(state => state.ui.isLoading);

    const [estateUnits, setEstateUnits] = useState(null);

    const dispatch = useDispatch();

    const unitsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getRealEstatesUnits(token, id));
    }, [dispatch]);

    useEffect(() => {
        unitsHandler();
    }, []);

    useEffect(() => {
        if (realEstatesUnits) {
            setEstateUnits(realEstatesUnits.units);
        }
    }, [realEstatesUnits]);

    return (
        <View style={[styles.container,]}>
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
                            <Text children='الوحدات العقارية' style={styles.title} transform={[{ translateY: 5 }]} />
                            <View style={[styles.iconWraper]}>
                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                    <Image source={apartments} style={[styles.chartIcon, { width: 27, height: 28.5 }]} />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>}
                whiteArea
            />

            <FlatList
                data={estateUnits}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                keyExtractor={item => item.unitId.toString()}
                ListHeaderComponent={() => (
                    loadings.includes('realEstateUnits') &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.jacarta} />
                    </View>
                )}
                renderItem={({ item, index }) => {
                    return (
                        <RealEstatesCard
                            item={item}
                            virticalCardStyle={styles.virticalCards}
                        />
                    );
                }}
            />

        </View>
    );
}
