import React, { useCallback, useEffect, useState } from 'react';
import { View, ActivityIndicator, ImageBackground, Image, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './Style';
import { primaryColors, gradientColors } from '../../theme/colors';
import {
    background, tailLogo, eye, tick
} from '../../images/index';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../components/Text/index';
import { fonts } from '../../theme/fonts';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';
import LottieView from 'lottie-react-native';

export default function LogIn(props) {

    const error = useSelector(state => state.auth.errorMessage);
    const loadings = useSelector(state => state.ui.isLoading);

    const [selected, setSelected] = useState(false);
    const [securePass, setSecurePass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginHandler = useCallback(() => {
        dispatch(login(email, fixNumbers(password)));
    }, [dispatch, email, password]);

    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

    function fixNumbers(str) {
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(arabicNumbers[i], i);
            }
        }
        return str;
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView
                style={styles.keyboardView}
            >
                <View style={styles.container} >
                    <ImageBackground source={background} style={styles.topImage} >
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.85)']}
                            style={styles.gradient} />
                    </ImageBackground>
                    <Text
                        children="تسجيل الدخول الى بوابة الملاك"
                        h4
                        style={styles.header} />
                    <View style={styles.subContainer}>
                        {
                            loadings.includes('login') &&
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator size="large" color={primaryColors.jacarta} />
                            </View>
                        }
                        <Text
                            children='الإيميل'
                            h5
                            style={styles.title}
                        />
                        <Input
                            placeholder='Email'
                            onChangeText={(value) => setEmail(value)}
                            inputTxtStyle={styles.inputTxtStyle}
                            containerStyle={styles.inputsAlignment}
                            autoCapitalize={false}
                        />
                        <Text
                            children='كلمة المرور'
                            h5
                            style={styles.title}
                        />
                        <Input
                            placeholder='••••••••'
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={securePass}
                            inputTxtStyle={[styles.inputTxtStyle, { textAlign: 'right' }]}
                            leftIcon={eye}
                            leftIconStyle={{ width: 20, height: 15 }}
                            onLeftIconPress={() => setSecurePass(!securePass)}
                        />
                        <Text children={error} color={primaryColors.redOrange} />
                        {/* <View style={styles.condotionContainer}>
                            <Text
                                children='تغيير نوع الحساب مالك - مستأجر'
                                h6
                                color={primaryColors.kaitoke}
                            />
                            <TouchableOpacity style={styles.square} activeOpacity={1} onPress={() => setSelected(!selected)}>
                                {selected && <Image source={tick} style={{ width: 14, height: 11 }} />}
                            </TouchableOpacity>
                        </View> */}
                        <Button
                            title='تسجيل الدخول'
                            colors={[
                                gradientColors.valhalla, gradientColors.jacarta,
                                gradientColors.eminence, gradientColors.plum
                            ]}
                            linearGradient={true}
                            style={styles.btnContainer}
                            titleStyle={{ fontFamily: fonts.regular }}
                            onPress={() => loginHandler()}
                            disabled={loadings.includes('login')}
                        />
                        <View style={styles.screenBottom}>
                            <Text style={styles.tailText}>Powerd By Asaas</Text>
                            <Image source={tailLogo} style={styles.tailLogo} resizeMode='contain' />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
    // return (
    //     <LottieView source={require('../../../assets/animatedSplash.json')} autoPlay loop={false} />
    // )
}
