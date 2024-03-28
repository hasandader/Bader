import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StatusBar, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/index';
import Text from '../../components/Text/index';
import GeneralCard from '../../components/Card/index';
import Row from '../../components/Row/index';
import {
    menu, priceTag, calendar, noteMarker, lamp
} from '../../images/index';
import { fonts } from '../../theme/fonts';
import { primaryColors, gradientColors } from '../../theme/colors';
import { isPlatformIos, deviceWidth } from '../../lib/utility';
import { useSelector, useDispatch } from 'react-redux';
import { getOutgoingsDocs } from '../../redux/actions/financialStatement';
import moment from '../../lib/Moment';

export default function OutgoingsDocs(props) {

    const token = useSelector(state => state.auth.token);
    const outgoingsDocs = useSelector(state => state.financialStatement.outgoingsDocs);
    const loadings = useSelector(state => state.ui.isLoading);

    const [docs, setDocs] = useState(null);

    const dispatch = useDispatch();

    const docsHandler = useCallback(() => {
        dispatch(getOutgoingsDocs(token));
    }, [dispatch]);

    useEffect(() => {
        docsHandler();
    }, []);

    useEffect(() => {
        if (outgoingsDocs) {
            console.log('outgoingsDocs checkout: ', outgoingsDocs);
            setDocs(outgoingsDocs);
        }
    }, [outgoingsDocs]);

    const data = [{}, {}, {}];

    return (
        <>
            <Header
                leftButton={menu}
                title='سندات الصرف'
                headerStyle={styles.headerStyle}
                back
                onBack={() => props.navigation.goBack()}
            />
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <FlatList
                    data={docs}
                    style={styles.flatList}
                    contentContainerStyle={styles.flatListContainer}
                    ListHeaderComponent={() => (
                        loadings.includes('getOutgoingsDocs') &&
                        <View style={styles.activityIndicator}>
                            <ActivityIndicator size="large" color={primaryColors.jacarta} />
                        </View>
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <GeneralCard
                                containerStyle={styles.cardStyle}
                                children={
                                    <View>
                                        <Row
                                            icon={noteMarker}
                                            sideIcon={styles.largeSideIcon}
                                            title="النوع"
                                            information={item.type}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={priceTag}
                                            sideIcon={[styles.largeSideIcon, { height: 50 }]}
                                            title="القيمة"
                                            information={item.amount}
                                            style={styles.rowAlignments}
                                        />
                                        <Row
                                            icon={lamp}
                                            sideIcon={styles.sideIcon}
                                            title="البيان"
                                        // information={item.status}
                                        // infoStyle={[item.status == 'مؤجرة' ? { color: primaryColors.malachite } : { color: primaryColors.redOrange }]}
                                        />
                                        <Text children={item.statement} style={styles.text} />
                                        <View style={[styles.divider, styles.updatedDivider]} />
                                        <View style={[styles.row, styles.dateRow]}>
                                            <View style={[styles.rectangle1, styles.dateRectangle]}>
                                                <Text children={moment(item.date).format("YYYY-MM-DD")} fontFamily={fonts.bold} color={primaryColors.kaitoke} transform={isPlatformIos() && [{ translateY: 2 }]} />
                                                <View style={[styles.circle, styles.dateCircle]}>
                                                    <Image source={calendar} style={styles.calenderIcon} />
                                                </View>
                                            </View>
                                            <Text children="تاريخ السند" size={16} color={primaryColors.eclipse} style={styles.rightAlignment} />
                                        </View>
                                    </View>
                                }
                            />
                        );
                    }}
                />
            </View>
        </>
    );
}
