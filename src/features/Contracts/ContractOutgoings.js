import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, outgoings, filter } from '../../images/index';
import { primaryColors, gradientColors } from '../../theme/colors';
import { deviceWidth } from '../../lib/utility';
import { fonts } from '../../theme/fonts';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button/index';
import OutgoingsCard from './components/OutgoingsCard';

const realEstatesData = require('../../data/dummyData/realEstates.json');

export default function ContractOutgoings(props) {

    const [outgoingsData, setOutgoingsData] = useState(null);

    useEffect(() => {
        const outgoings = props.navigation.getParam('outgoings');
        setOutgoingsData(outgoings);
    }, []);

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
                data={outgoingsData}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                renderItem={({ item, index }) => {
                    return (
                        <OutgoingsCard
                            containerStyle={styles.cardStyle}
                            type={item.label}
                            amount={parseFloat(item.value).toFixed(2)}
                            header={false}
                            title='النوع'
                            secondTitle='القيمة'
                        />
                    );
                }}
            />

        </View>
    );
}
