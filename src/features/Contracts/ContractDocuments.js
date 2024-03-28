import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Image, StatusBar } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import Header from '../../components/Header/index';
import { menu, documents } from '../../images/index';
import { gradientColors } from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import DocumentsCard from './components/DocumentsCard';
import moment from '../../lib/Moment';

const realEstatesData = require('../../data/dummyData/realEstates.json');

export default function ContractDocuments(props) {

    const [document, setDocument] = useState(null);

    useEffect(() => {
        const vouchers = props.navigation.getParam('vouchers');
        setDocument(vouchers);
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
                            <Text children='السندات' style={styles.title} transform={[{ translateY: 5 }]} />
                            <View style={[styles.iconWraper]}>
                                <LinearGradient useAngle={true} angleCenter={{ x: 0.5, y: 0.6 }} colors={[gradientColors.jacarta, gradientColors.fuchsiaPink]} style={styles.iconGradient}>
                                    <Image source={documents} style={[styles.chartIcon, { width: 23, height: 24 }]} />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>}
                whiteArea
            />

            <FlatList
                data={document}
                style={styles.listWraper}
                contentContainerStyle={[styles.horizontalFlatlist, styles.updatedFlatList]}
                renderItem={({ item, index }) => {
                    return (
                        <DocumentsCard
                            header={false}
                            containerStyle={styles.cardStyle}
                            type={item.type_text}
                            amount={item.amount}
                            owner={item.person}
                            docDetails={item.voucher_type_text}
                            date={moment(item.created_at).format("YYYY-MM-DD")}
                        />
                    );
                }}
            />

        </View>
    );
}
