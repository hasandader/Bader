import React from 'react';
import { Image, I18nManager, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {
    Login, Home, RealEstates, Contracts, FinancialStatement,
    RealEstateDetails, UnitDetails, ContractsList,
    OutgoingsList, PhotosList, ContractDetails,
    ContractPhotos, ContractPayments, ContractOutgoings,
    ContractDocuments, PaymentsDue, Renter, AllRealEstateDetails,
    Confirmation, Contact, IntroSlides, OutgoingsDocs, Registration
} from '../features/index';
import { home, realEstates, contracts, statement } from '../images/index';
import { primaryColors } from '../theme/colors';
import { fonts } from '../theme/fonts';
import TabButton from './TabButton';
import styles from './Style';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        PaymentsDue: {
            screen: PaymentsDue
        },
        Renter: {
            screen: Renter
        },
        RealEstateDetails: {
            screen: RealEstateDetails
        },
        AllRealEstateDetails: {
            screen: AllRealEstateDetails
        },
        UnitDetails: {
            screen: UnitDetails
        },
        ContractsList: {
            screen: ContractsList
        },
        OutgoingsList: {
            screen: OutgoingsList
        },
        PhotosList: {
            screen: PhotosList
        },
        ContractDetails: {
            screen: ContractDetails
        },
        ContractPhotos: {
            screen: ContractPhotos
        },
        ContractPayments: {
            screen: ContractPayments
        },
        ContractOutgoings: {
            screen: ContractOutgoings
        },
        ContractDocuments: {
            screen: ContractDocuments
        },
    },
    {
        headerMode: 'none',
    }
);
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <Image source={home} style={{ width: 30, height: 30, tintColor: primaryColors.white }} resizeMode='contain' />
                } />
            :
            <Image source={home} style={{ width: 30, height: 30 }} resizeMode='contain' />
    ),
    tabBarLabel: ({ focused }) => (
        focused ?
            <Text style={styles.activeLabel}>الرئيسية</Text>
            :
            <Text style={[styles.activeLabel, { color: primaryColors.doveGray }]}>الرئيسية</Text>
    ),
};

const RealEstatesStack = createStackNavigator(
    {
        RealEstates: {
            screen: RealEstates,
        },
        RealEstateDetails: {
            screen: RealEstateDetails
        },
        UnitDetails: {
            screen: UnitDetails
        },
        AllRealEstateDetails: {
            screen: AllRealEstateDetails
        },
        ContractsList: {
            screen: ContractsList
        },
        OutgoingsList: {
            screen: OutgoingsList
        },
        PhotosList: {
            screen: PhotosList
        },
        ContractDetails: {
            screen: ContractDetails
        },
        ContractPhotos: {
            screen: ContractPhotos
        },
        ContractPayments: {
            screen: ContractPayments
        },
        ContractOutgoings: {
            screen: ContractOutgoings
        },
        ContractDocuments: {
            screen: ContractDocuments
        },
        Renter: {
            screen: Renter
        },
    },
    {
        headerMode: 'none',
    }
);
RealEstatesStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <Image source={realEstates} style={{ width: 18.7, height: 26.7, tintColor: primaryColors.white }} resizeMode='contain' />
                } />
            :
            <Image source={realEstates} style={{ width: 18.7, height: 26.7 }} resizeMode='contain' />
    ),
    tabBarLabel: ({ focused }) => (
        focused ?
            <Text style={styles.activeLabel}>العقارات</Text>
            :
            <Text style={[styles.activeLabel, { color: primaryColors.doveGray }]}>العقارات</Text>
    ),
};

const ContractsStack = createStackNavigator(
    {
        Contracts: {
            screen: Contracts,
        },
        ContractDetails: {
            screen: ContractDetails
        },
        ContractPhotos: {
            screen: ContractPhotos
        },
        ContractPayments: {
            screen: ContractPayments
        },
        ContractOutgoings: {
            screen: ContractOutgoings
        },
        ContractDocuments: {
            screen: ContractDocuments
        },
        Renter: {
            screen: Renter
        },
        RealEstateDetails: {
            screen: RealEstateDetails
        },
    },
    {
        headerMode: 'none',
    }
);
ContractsStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <Image source={contracts} style={{ width: 30, height: 30, tintColor: primaryColors.white }} resizeMode='contain' />
                } />
            :
            <Image source={contracts} style={{ width: 30, height: 30 }} resizeMode='contain' />
    ),
    tabBarLabel: ({ focused }) => (
        focused ?
            <Text style={styles.activeLabel}>العقود</Text>
            :
            <Text style={[styles.activeLabel, { color: primaryColors.doveGray }]}>العقود</Text>
    ),
};

const FinancialStatementStack = createStackNavigator(
    {
        FinancialStatement: {
            screen: FinancialStatement,
        },
        OutgoingsDocs: {
            screen: OutgoingsDocs,
        }
    },
    {
        headerMode: 'none',
    },
);
FinancialStatementStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <Image source={statement} style={{ width: 25, height: 25, tintColor: primaryColors.white }} resizeMode='contain' />
                } />
            :
            <Image source={statement} style={{ width: 25, height: 25 }} resizeMode='contain' />
    ),
    tabBarLabel: ({ focused }) => (
        focused ?
            <Text style={styles.activeLabel}>كشف</Text>
            :
            <Text style={[styles.activeLabel, { color: primaryColors.doveGray }]}>كشف</Text>
    ),
};

export const AppTab = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        RealEstates: { screen: RealEstatesStack },
        Contracts: { screen: ContractsStack },
        FinancialStatement: { screen: FinancialStatementStack },
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 15,
                fontFamily: fonts.regular,
                color: primaryColors.dimGray,
            },

            style: {
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                position: 'absolute',
                borderTopWidth: 0,
                height: 80,
                flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.05,
                shadowRadius: 5,

                elevation: 15,

            },

            tabStyle: {
                marginTop: 10,
            }
        },
    },
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        },
    },
    {
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {},
            headerTitleStyle: {},
        }),
        initialRouteName: 'Login',
    }
);

const ConfirmationStack = createStackNavigator(
    {
        Confirmation: {
            screen: Confirmation
        },
        Contact: {
            screen: Contact
        },
        Registration: {
            screen: Registration
        }
    },
    {
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {},
            headerTitleStyle: {},
        }),
        initialRouteName: 'Confirmation',
    }
);

const IntroStack = createStackNavigator(
    {
        IntroSlides: {
            screen: IntroSlides
        },
    },
    {
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {},
            headerTitleStyle: {},
        }),
        initialRouteName: 'IntroSlides',
    }
);

export const IntroStacks = createAppContainer(IntroStack);
export const ConfirmationStacks = createAppContainer(ConfirmationStack);
export const AuthStacks = createAppContainer(AuthStack);
export const AppStacks = createAppContainer(AppTab);