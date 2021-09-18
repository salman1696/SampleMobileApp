import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Text,
  FlatList,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button} from '../Buttons/Button';
import theme from '../../theme';
import {Fonts} from '../../utils/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomText} from '../Text/Text';
import {ListItem, Divider} from 'react-native-elements';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {cancelIcon, tomatoPic, lemonPic, onionPic} from '../../assets';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
// import I18n from '../../translation';

const DATA = [
  {
    name: 'Tomato \nBurger',
    createdAt: '12:00pm',
    id: '124578956',
    price: '$70.00',
    image: tomatoPic,
  },
  {
    name: 'Tomato \nBurger',
    createdAt: '12:00pm',
    id: '124578956',
    price: '$70.00',
    image: onionPic,
  },
];

const CheckoutModal = ({
  toggleModal,
  modalVisible,
  languages,
  onChangeLanguage,
  onDone,
}) => {
  const {main, innerView, titleStyle} = styles;

  const renderProduct = ({item, index}) => {
    return (
      <View style={{borderRadius: 8}}>
        <ListItem
          title={item.name}
          titleStyle={{fontSize: 14, fontFamily: Fonts.MulishRegular}}
          subtitleStyle={{fontSize: 10, fontFamily: Fonts.MulishRegular}}
          style={{padding: 0, borderRadius: 8}}
          containerStyle={{borderRadius: 8}}
          contentContainerStyle={{borderRadius: 8}}
          leftAvatar={<Image source={item.image} />}
          subtitle={item.price}
          rightAvatar={
            <Image
              source={cancelIcon}
              style={{width: 15, height: 15, bottom: 8}}
            />
          }
          rightSubtitle={''}
        />
        <Divider style={{marginHorizontal: 10}} />
      </View>
    );
  };
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      transparent
      onSwipeComplete={toggleModal}
      onBackdropPress={() => toggleModal(false)}
      swipeDirection="up">
      <TouchableOpacity onPress={() => onDone()} style={main}>
        <View
          style={{
            position: 'absolute',
            bottom: heightPercentageToDP(15),
            marginHorizontal: 30,
            backgroundColor: theme.colors.white,
            width: '79%',
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingTop: 10,
            }}>
            <CustomText title={'add_to_cart_pop_up'} />
            <TouchableOpacity
              style={{alignSelf: 'center', right: 5}}
              onPress={() => toggleModal(false)}>
              <Image
                source={cancelIcon}
                resizeMode={'contain'}
                style={{width: 15, heigth: 15}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center', top: 20}}>
            <FlatList
              data={DATA}
              renderItem={renderProduct}
              contentContainerStyle={{
                borderRadius: 8,
                marginHorizontal: 6,
                justifyContent: 'center',
                flex: 1,
              }}
              keyExtractor={(item, index) => item + index.toString()}
            />
          </View>

          <View style={{bottom: -100}}>
            <Button
              title={'Check_out'}
              backgroundColor={theme.colors.primary}
              textColor={theme.colors.white}
              onPress={onDone}
              style={{marginTop: 0, shadowOpacity: 0}}
            />
            <CustomText
              title={'continue_your_purchases'}
              textAlign={'center'}
              type={'bold'}
              onPress={() => toggleModal(false)}
              color={theme.colors.white}
              style={{fontSize: 13, marginTop: 0}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

// const Box = ({title, selected, onPress}) => {
//   const {boxContainer} = styles;
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       activeOpacity={0.6}
//       style={[
//         boxContainer,
//         {backgroundColor: selected ? colors.primary : colors.lightPrimary},
//       ]}>
//       <Image
//         source={borderTick}
//         style={{
//           width: 30,
//           height: 30,
//           tintColor: selected ? colors.white : colors.primary,
//         }}
//         resizeMode={'contain'}
//       />
//       <CustomText
//         color={selected ? colors.white : colors.primary}
//         title={title}
//         type={'bold'}
//       />
//     </TouchableOpacity>
//   );
// };

const margin = 10;
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    // borderRadius: 10,
    height: Dimensions.get('window').height / 2.9,
    width: '100%',
    // margin: 50,
    justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  titleStyle: {
    margin,
    fontSize: 18,
    marginTop: 6,
  },
  boxContainer: {
    width: 90,
    height: 100,
    backgroundColor: theme.colors.lightPrimary,
    margin,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 16,
    padding: 5,
  },
});

export {CheckoutModal};
