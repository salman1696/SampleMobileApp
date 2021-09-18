import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, ImageBackground, Image} from 'react-native';
// import {splashBG, textLogo} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts} from '../../utils/Fonts';
import {WP} from '../../utils';

const Splash = props => {
  const navigation = useNavigation();

  //redux

  const {isLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  const {main, bgImage, logo} = styles;
  return (
    <View style={main}>
      <ImageBackground resizeMode={'stretch'} style={bgImage}>
        <Image />
        <Text style={{fontSize: WP(12), fontFamily: Fonts.MulishBold}}>
          Splash
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Splash;
