import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
 } from 'react-native'
 import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
 import Home from './screens/Home';
 import User from './screens/User';
 import Detail from './screens/Detail';
 import Menu from './screens/Menu';

export const HomeStack = StackNavigator({
    ManHinh_Home: {
        screen: Home,
        navigationOptions: {
            title: 'Trang Chu'
        }
    },
    ManHinh_Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Chi Tiet'
        }
    },
})

export const UserStack = StackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions: {
            title: 'Tai Khoan'
        }
    }
})

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'HOME',
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            tabBarLabel: 'USER'
        }
    },
},
{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: '#FFC125',
        },
        labelStyle: {
            fontSize: 15,
        },
        inactiveTintColor: '#fff',
        activeTintColor: '#363636'
    }
})

export const SlideMenu = DrawerNavigator({
    Tabber: {
        screen: Tabs
    }
},
    {
        drawerWidth: 260,
        drawerPosition:'left',
        contentComponent: props =><Menu {...props}/>
});