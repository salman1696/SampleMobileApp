import React, {useEffect} from 'react';
import {TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
import {Header} from 'react-native-elements';
import propTypes from 'prop-types';
import {Fonts} from '../../utils/Fonts';
import theme from '../../theme';
import {Icon, Badge} from 'react-native-elements';
// import {color} from 'react-native-reanimated';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const AppHeader = ({
  right,
  left,
  title,
  onRightPress,
  onLeftPress,
  isCartIcon = false,
  backgroundColor,
  
  placement,
  props,
  // icon,
  // name,
  // type,
  // size,
}) => {
  const {iconStyle, titleStyle, containerStyle} = styles;

  //  alert(cartItems.length);
  return (
    <Header
      leftComponent={
        <TouchableOpacity onPress={onLeftPress}>{left}</TouchableOpacity>
      }
      placement={placement}
      centerComponent={title}
      containerStyle={[containerStyle, {backgroundColor}]}
      centerContainerStyle={titleStyle}
    />
  );
};

const margin = 10;
const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
    margin,
    tintColor: theme.colors.white,
  },
  titleStyle: {
    //  fontFamily: Fonts.GoogleSansBold,
  },
  iconStyle: {
    marginRight: 6,
  },
  badgeContainer: {
    position: 'absolute',
    top: -8,
    right: 2,
    zIndex: 10,
    width: wp('5'),
    height: hp('4'),
  },
  containerStyle: {
    paddingTop: 0,
    height: Platform.select({
      android: 56,
      default: 45,
      ios: 60,
    }),
    borderBottomWidth: 0,
  },
});

AppHeader.propTypes = {
  right: propTypes.any,
  name: propTypes.any,
  size: propTypes.any,
  type: propTypes.any,
  left: propTypes.any,
  title: propTypes.any,
  icon: propTypes.any,
  onRightPress: propTypes.func,
  onLeftPress: propTypes.func,
  transparent: propTypes.bool,
};

export {AppHeader};
