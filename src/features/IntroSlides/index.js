import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Style';
import { firstSlide, secondSlide, thirdSlide, fourthSlide } from '../../images';
import { deviceHeight, isPlatformIos } from '../../lib/utility';
import { useSelector, useDispatch } from 'react-redux';
import { setAppIntro, setAppIntroStatus } from '../../redux/actions/auth';
import { primaryColors, gradientColors } from '../../theme/colors';
import Button from '../../components/Button/index';
import { fonts } from '../../theme/fonts';

export default function index(props) {

    const [slides, setSlides] = useState([
        {
            key: 'k1',
            title: 'عرض ملخص احصائياتك',
            text: 'يوفر لك التطبيق رؤية واضحة شاملة لكل البيانات الخاصة بك على شكل احصائيات ',
            image: firstSlide,
            backgroundColor: primaryColors.white,
            done: false,
            props: props
        },
        {
            key: 'k2',
            title: 'وصول سريع لعقاراتك',
            text: 'بإمكانك عبر التطبيق  الوصول بأسرع ما يمكن لكل عقارات وعرض كامل لكل تفاصيل العقار ',
            image: secondSlide,
            backgroundColor: primaryColors.white,
            done: false,
            props: props
        },
        {
            key: 'k3',
            title: 'عرض العقود العقارية',
            text: 'تستطيع من خلال التطبيق عرض كل العقود الخاصة بك على جميع العقارات ومراجعتها بكل سهولة',
            image: thirdSlide,
            backgroundColor: primaryColors.white,
            done: false,
            props: props
        },
        {
            key: 'k4',
            title: 'متابعة الأرصدة',
            text: 'يوفر لك التطبيق استعراض كامل لكشف الحساب والرصيد النهائي',
            image: fourthSlide,
            backgroundColor: primaryColors.white,
            done: true,
            props: props
        }
    ]);


    _renderItem = (props) => (
        <View style={styles.mainContent}>
            {
                props.item.done ? null :
                    <TouchableOpacity style={styles.skipButton} onPress={() => introHandler()} >
                        <Text style={[styles.title, { fontFamily: fonts.regular, fontSize: 18 }]}>تخطي </Text>
                    </TouchableOpacity>
            }
            <View
                style={[
                    props.item.done && deviceHeight() > 812 ?
                        [styles.contentWraper] : [styles.contentWraper, { marginTop: 20 }],
                    deviceHeight() < 812 && [styles.contentWraper, { marginTop: 0 }],

                ]}
            >
                <Image source={props.item.image} style={[styles.image,
                (deviceHeight() < 812 && !props.item.done && isPlatformIos()) && [styles.image, { marginTop: 15 }],
                (deviceHeight() < 812 && props.item.done && isPlatformIos()) && [styles.image, { marginTop: 0 }]
                ]} />
                <View style={styles.textsWraper}>
                    <Text style={styles.title}>{props.item.title}</Text>
                    <Text style={styles.text}>{props.item.text}</Text>
                </View>
            </View>
            {
                props.item.key == 'k4' &&
                <Button
                    title='إبدا الأن'
                    colors={[
                        gradientColors.valhalla, gradientColors.jacarta,
                        gradientColors.eminence, gradientColors.plum
                    ]}
                    linearGradient={true}
                    style={styles.btnContainer}
                    titleStyle={styles.btnTitle}
                    onPress={() => introHandler()}
                />
            }
        </View >
    );


    const dispatch = useDispatch();

    const introHandler = useCallback(() => {
        dispatch(setAppIntro(false));
        dispatch(setAppIntroStatus());
    }, [dispatch]);

    return (
        <AppIntroSlider
            ref={ref => {
                slider = ref;
            }}
            data={slides}
            renderItem={_renderItem}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            activeDotStyle={{ backgroundColor: primaryColors.jacarta }}
            buttonTextStyle={styles.buttonTxt}
        />
    );
}
