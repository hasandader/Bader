import React, { useCallback, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './Style';
import { logo, tree, backBtn, tailLogo, done } from '../../images/index';
import Button from '../../components/Button/index';
import Text from '../../components/Text/index';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { fonts } from '../../theme/fonts';
import { primaryColors, gradientColors } from '../../theme/colors';
import { setConfirmedAccount } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function Contact(props) {

    const parent = props.navigation.state.params && props.navigation.state.params.parent;
    console.log('parent: ', props.navigation)

    const dispatch = useDispatch();

    const confirmationHandler = useCallback(() => {
        dispatch(setConfirmedAccount(false, 'no'));
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => { confirmationHandler(); props.navigation.goBack() }}>
                <Image source={backBtn} style={{ width: deviceWidth() * 0.048, height: deviceHeight() * 0.015 }} />
            </TouchableOpacity>
            <View style={[styles.imagesWraper, { marginTop: 0 }]}>
                <Image source={logo} style={styles.logo} />
            </View>
            <Text
                children={`شركة بدر الحبيب للاستثمار العقاري${"\n"} تطبيق الملاك`}
                fontFamily={fonts.bold}
                fontSize={20}
                color={primaryColors.scarpaFlow}
                lineHeight={30}
                align='center'
            />
            <Text
                children={`يتيح لك متابعة حسابك لدى الوسيط${"\n"} العقاري إدارياَ ومالياَ`}
                fontFamily={fonts.regular}
                fontSize={18}
                color={primaryColors.scarpaFlow}
                lineHeight={30}
                align='center'
                mTop={deviceHeight() * 0.018}
                mBottom={deviceHeight() > 812 ? deviceHeight() * 0.05 : 0}
            />
            <Text
                children='يمكنك الحصول على رمز الاشتراك من خلال '
                fontFamily={fonts.bold}
                fontSize={14}
                color={primaryColors.jacarta}
                lineHeight={30}
                align='center'
            />
            <View style={styles.box}>
                <Text
                    children='التواصل عبر البريد الإلكتروني الخاص  بالشركة'
                    fontFamily={fonts.regular}
                    fontSize={14}
                    color={primaryColors.eclipse}
                    lineHeight={24}
                />
                <View style={styles.underline}>
                    <Text
                        children='bader.habib.office@gmail.com'
                        style={styles.test}
                        fontFamily={fonts.bold}
                        fontSize={16}
                        color={primaryColors.eclipse}
                        lineHeight={24}
                        mTop={deviceHeight() * 0.02}
                    />
                </View>
            </View>
            <View style={[styles.box, styles.boxAlignment]}>
                <Text
                    children='أو التواصل مع فريق الدعم الفني الخاص بنا '
                    fontFamily={fonts.regular}
                    fontSize={14}
                    color={primaryColors.eclipse}
                    lineHeight={24}
                />
                <View style={styles.underline}>
                    <Text
                        children='920033163'
                        style={styles.test}
                        fontFamily={fonts.bold}
                        fontSize={16}
                        color={primaryColors.eclipse}
                        lineHeight={24}
                        mTop={deviceHeight() * 0.02}
                    />
                </View>
            </View>
            {
                parent == 'registration' ?
                    <Button
                        title='الانتقال للرئيسية'
                        colors={[
                            gradientColors.valhalla, gradientColors.jacarta,
                            gradientColors.eminence, gradientColors.plum
                        ]}
                        linearGradient={true}
                        titleStyle={{ fontFamily: fonts.regular }}
                        style={styles.btnContainer}
                        onPress={() => { props.navigation.popToTop() }}
                    />
                    :
                    <TouchableOpacity style={[styles.textWraper, { alignSelf: 'center', marginRight: 0, marginLeft: 0 }]} onPress={() => props.navigation.navigate('Registration')}>
                        <Text color={primaryColors.cloudBurst} children='تسجيل حساب جديد' style={styles.textBtn} />
                    </TouchableOpacity>
            }
            <View style={[styles.screenBottom, parent == 'registration' && { marginTop: deviceHeight() * 0.02 }]}>
                <Text style={styles.tailText}>Powerd By Asaas</Text>
                <Image source={tailLogo} style={styles.tailLogo} resizeMode='contain' />
            </View>
        </View>
    )
}