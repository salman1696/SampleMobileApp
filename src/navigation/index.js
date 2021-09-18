/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

//Auth Screens
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{width: '100%'}}
    drawerType={'slide'}
    screenOptions={{gestureEnabled: true}}
    initialRouteName={'Home'}
    headerMode={'none'}>
    <Drawer.Screen
      options={{gestureEnabled: false, headerShown: false}}
      name={'Home'}
      component={Home}
    />
    <Drawer.Screen
      options={{gestureEnabled: false, headerShown: false}}
      name={'DetailScreen'}
      component={DetailScreen}
    />
  </Drawer.Navigator>
);

const MainNavigation = ({params}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName={'Splash'}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Home'} component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
