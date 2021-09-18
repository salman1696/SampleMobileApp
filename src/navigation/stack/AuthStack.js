import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
//Auth Screens
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import GetStarted from '../../screens/GetStarted';
import ReceiveCode from '../../screens/ReceiveCode';
import PhoneVerification from '../../screens/PhoneVerification';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';
import ForgotPasswordConfirm from '../../screens/ForgotPasswordConfirm/ForgotPasswordConfirm';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'GetStarted'}>
    <Stack.Screen name={'Login'} component={Login} />
    <Stack.Screen name={'Signup'} component={Signup} />
    <Stack.Screen name={'PhoneVerification'} component={PhoneVerification} />
    <Stack.Screen name={'GetStarted'} component={GetStarted} />
    <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    <Stack.Screen name={'ReceiveCode'} component={ReceiveCode} />
    <Stack.Screen
      name={'ForgotPasswordConfirm'}
      component={ForgotPasswordConfirm}
    />
  </Stack.Navigator>
);

export {AuthStack};
