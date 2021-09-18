import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import propTypes from 'prop-types';

const CustomText = ({
  title,
  color,
  type,
  size,
  left,
  padding,
  flex,
  textAlign,
  style,
  top,
  numberOfLines,
  children,
  onLongPress,
  onPress,
  disabled,
}) => {
  const {normalStyle, semiBoldStyle, boldStyle} = styles;
  const textStyle =
    type === 'normal'
      ? normalStyle
      : type === 'medium'
      ? semiBoldStyle
      : boldStyle;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Text
        numberOfLines={numberOfLines}
        onLongPress={onLongPress}
        style={[
          style,
          {
            color,
            top,
            flex,
            left,
            padding,
            textAlign,
            fontSize: size,
            fontFamily: Fonts.MulishRegular,
          },
        ]}>
        {title}
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const margin = 2;
const styles = StyleSheet.create({
  normalStyle: {
    fontFamily: Fonts.MulishRegular,
    fontSize: 14,
    margin,
  },
  semiBoldStyle: {
    fontFamily: Fonts.MulishMedium,
    fontSize: 16,
    margin,
  },
  boldStyle: {
    fontFamily: Fonts.MulishBold,
    fontSize: 16,
    margin,
  },
});

CustomText.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  title: propTypes.string,
  textAlign: propTypes.string,
  style: propTypes.any,
};

export {CustomText};
