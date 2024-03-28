import React, { useEffect, useCallback, useState } from 'react';
import {
    StatusBar, ActivityIndicator, View, Text
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthData } from './redux/actions/auth';
import SplashScreen from 'react-native-splash-screen';
import { deviceHeight } from './lib/utility';
import LottieView from 'lottie-react-native';

import { IntroStacks, ConfirmationStacks, AuthStacks, AppStacks } from '../src/navigation/index';

function App() {
    const token = useSelector(state => state.auth.token);
    const stopSplash = useSelector(state => state.auth.stopSplash);
    const appIntro = useSelector(state => state.auth.appIntro);
    const confirmedAccount = useSelector(state => state.auth.confirmedAccount);

    const [appIntroSlide, setAppIntroSlide] = useState(appIntro);
    const [splash, setSplash] = useState(true);

    const dispatch = useDispatch();

    const appIntroHandler = useCallback(() => {
        dispatch(getAuthData());
    }, [dispatch]);

    useEffect(() => {
        appIntroHandler();
    }, []);

    useEffect(() => {
        setAppIntroSlide(appIntro);
    }, [appIntro])

    useEffect(() => {
        if (stopSplash) {
            SplashScreen.hide();
            console.log('true')
        }
        console.log('false')
    }, [stopSplash]);



    if (splash) {
        return (
            <LottieView source={require('../assets/animatedSplash.json')} autoPlay loop={false}
                onAnimationFinish={() => setSplash(false)} style={{ width: '100%' }}
            />
        )
    } else {

    } if (appIntroSlide || !confirmedAccount) {
        return (
            appIntroSlide ? <IntroStacks /> : <ConfirmationStacks />
        )
    } else {
        return (
            <>
                {token !== null ? <AppStacks /> : <AuthStacks />}
            </>
        );
    }

    // return <AuthStacks />
};

export default App;
