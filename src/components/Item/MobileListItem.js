import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import {burger, resturantIcon} from '../../assets';
import {colors, Divider, Image} from 'react-native-elements';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import {HP, WP} from '../../utils';

const MobileListItem = ({title, onPress, item}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={Styles.mobileListItemSty}>
    <Image
      style={{
        width: WP(30),
        height: HP(14),
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      }}
      source={{uri: item?.imageFileName}}
      //  PlaceholderContent={<ActivityIndicator color={'#000'} size={'small'} />}
    />
    <View style={{flex: 0.9, top: HP(3), alignItems: 'flex-start'}}>
      <Text numberOfLines={1} style={Styles.textTitle}>
        {item.name}
      </Text>
      <Text numberOfLines={1} style={Styles.textTitlePrice}>
        {'$' + item.price}
      </Text>
    </View>
  </TouchableOpacity>
);

const Styles = StyleSheet.create({
  mobileListItemSty: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: theme.colors.lightGray,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,

    borderRadius: 5,
  },
  textTitle: {
    marginStart: WP(4),
    textAlign: 'left',
    fontSize: WP(8),
    color: theme.colors.white,
    fontFamily: Fonts.MulishRegular,
    justifyContent: 'center',
  },
  textTitlePrice: {
    marginStart: WP(6),
    fontSize: WP(3),
    textAlign: 'left',
    color: theme.colors.white,
    fontFamily: Fonts.MulishRegular,
  },
});
export {MobileListItem};
