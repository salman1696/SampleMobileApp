import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/RestaurantScreens/Home/Home';
import FindRestaurant from '../../screens/FindRestaurant';
import ItemDetailScreen from '../../screens/RestaurantScreens/ItemDetailScreen/ItemDetailScreen';
import AllCategories from '../../screens/RestaurantScreens/AllCategories';
import ItemListScreen from '../../screens/RestaurantScreens/ItemListScreen/ItemListScreen';
import FilterScreen from '../../screens/RestaurantScreens/Home/FilterScreen/FilterScreen';
import RestaurantDetail from '../../screens/RestaurantScreens/RestaurantDetail/RestaurantDetail';
import CategoryDetail from '../../screens/RestaurantScreens/CategoryDetail';
import CartScreen from '../../screens/CartScreen/CartScreen';
import PickFromMap from '../../screens/CartScreen/PickFromMap';
import TrackOrder from '../../screens/TrackOrder';
import Payment from '../../screens/Payment';
import PaymentWebView from '../../screens/PaymentWebView';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
    <Stack.Screen name={'Home'} component={Home} />
    <Stack.Screen name={'AllCategories'} component={AllCategories} />
    <Stack.Screen name={'ItemListScreen'} component={ItemListScreen} />
    <Stack.Screen name={'FilterScreen'} component={FilterScreen} />
    <Stack.Screen name={'RestaurantDetail'} component={RestaurantDetail} />
    <Stack.Screen name={'ItemDetailScreen'} component={ItemDetailScreen} />
    <Stack.Screen name={'FindRestaurant'} component={FindRestaurant} />
    <Stack.Screen name={'CategoryDetail'} component={CategoryDetail} />
    <Stack.Screen name={'CartScreen'} component={CartScreen} />
    <Stack.Screen name={'PickFromMap'} component={PickFromMap} />
    <Stack.Screen name={'TrackOrder'} component={TrackOrder} />
    <Stack.Screen name={'Payment'} component={Payment} />
    <Stack.Screen name={'PaymentWebView'} component={PaymentWebView} />
  </Stack.Navigator>
);

export {HomeStack};
