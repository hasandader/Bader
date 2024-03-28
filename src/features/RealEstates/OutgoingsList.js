import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar, ActivityIndicator } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, outgoings } from '../../images/index';
import { gradientColors, primaryColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import OutgoingsCard from './components/OutgoingsCard';
import { useSelector, useDispatch } from 'react-redux';
import { getRealEstatesOutgoings } from '../../redux/actions/realEstates';

export default function OutgoingsList(props) {

    const token = useSelector(state => state.auth.token);
    const details = useSelector(state => state.realEstates.realEstatesOutgoings);
    const loadings = useSelector(state => state.ui.isLoading);

    const [estateOutgoings, setEstateOutgoings] = useState(null);

    const dispatch = useDispatch();

    const outgoingsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getRealEstatesOutgoings(token, id))
    }, [dispatch]);

    useEffect(() => {
        outgoingsHandler();
    }, []);

    useEffect(() => {
        if (details) {
            setEstateOutgoings(details.expenses);
        }
    }, [details]);

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
                            <Text children='المصروفات' style={styles.title} transform={[{ translateY: 5 }]} />
                            <View style={[styles.iconWraper]}>
                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                    <Image source={outgoings} style={[styles.chartIcon, { width: 34, height: 17 }]} />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>}
                whiteArea
            />

            <FlatList
                data={estateOutgoings}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                ListHeaderComponent={() => (
                    loadings.includes('realEstateOutgoings') &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.jacarta} />
                    </View>
                )}
                renderItem={({ item, index }) => {
                    return (
                        <OutgoingsCard
                            item={item}
                            onPress={() => props.navigation.navigate('OutgoingsList')}
                            virticalCardStyle={styles.virticalCards}
                        />
                    );
                }}
            />

        </View>
    );
}
