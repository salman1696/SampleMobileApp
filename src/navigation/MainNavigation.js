import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {useDispatch, useSelector} from 'react-redux';

import Splash from '../screens/Splash';

import {
  AddressStack,
  AuthStack,
  HomeStack,
  OrderStack,
  ProfileStack,
  SettingStack,
} from './stack';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreens = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{width: '100%'}}
    drawerType={'slide'}
    screenOptions={{gestureEnabled: true}}
    initialRouteName={'HomeFlow'}
    headerMode={'none'}>
    <Drawer.Screen name={'HomeFlow'} component={HomeStack} />
    <Drawer.Screen name={'Profile'} component={ProfileStack} />
    <Drawer.Screen name={'MyOrders'} component={OrderStack} />
    <Drawer.Screen name={'Setting'} component={SettingStack} />
    <Drawer.Screen name={'AddressScreen'} component={AddressStack} />
  </Drawer.Navigator>
);

const MainNav = () => {
  const [showSplash, setShowSplash] = useState(true);

  const {isLoggedIn} = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1500);
  }, [showSplash, isLoggedIn]);

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode={'none'}>
        {/* {showSplash && <AppStack.Screen name={'Splash'} component={Splash} />} */}
        {showSplash ? (
          <AppStack.Screen name={'Splash'} component={Splash} />
        ) : isLoggedIn ? (
          <AppStack.Screen name={'App'} component={HomeScreens} />
        ) : (
          <AppStack.Screen name={'Auth'} component={AuthStack} />
        )}
        {/* <AppStack.Screen name={'App'} component={HomeScreens} />
        <AppStack.Screen name={'Auth'} component={AuthStack} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
