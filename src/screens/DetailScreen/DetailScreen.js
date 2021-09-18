import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {AppHeader, CustomText, MobileListItem} from '../../components';
import {back_icon} from '../../assets';

import {loginUser} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {HP, WP} from '../../utils';
import theme from '../../theme';

const DetailScreen = ({navigation, route}) => {
  //--------------------
  //redux
  const dispatch = useDispatch();
  const {isLoading, storeMobiles} = useSelector(state => state.auth);
  const [item, setItem] = useState('');

  useEffect(() => {
    setItem(storeMobiles[route?.params.item.id]);
  }, [route?.params.item.id]);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      {Platform.OS === 'android' ? <View style={{height: HP(4.6)}} /> : null}
      <AppHeader
        left={
          <View style={{padding: 10}}>
            <Image
              source={back_icon}
              resizeMode={'contain'}
              style={{height: 20, width: 20}}
              PlaceholderContent={
                <ActivityIndicator color={'#000'} size={'small'} />
              }
            />
          </View>
        }
        backgroundColor={theme.colors.primary}
        isCartIcon={false}
        title={
          <CustomText
            title={item.name}
            textAlign={'center'}
            type={'normal'}
            size={18}
          />
        }
        onLeftPress={() => navigation.navigate('Home')}
      />
      <View style={{flex: 1}}>
        <Image
          style={{
            width: WP(100),
            height: HP(54),
          }}
          source={{uri: item.imageFileName}}
          //  PlaceholderContent={<ActivityIndicator color={'#000'} size={'small'} />}
        />
        <View
          style={{
            width: WP(100),
            backgroundColor: theme.colors.primary,
            flex: 1,
            paddingBottom: 10,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}>
          <CustomText
            title={item.manufacturer}
            size={WP(3)}
            top={8}
            textAlign={'center'}
            type={'normal'}
          />
          <CustomText
            title={item.name}
            size={WP(7)}
            color={'white'}
            textAlign={'center'}
          />

          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              alignSelf: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flex: 0.5,
                  margin: WP(1),
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <CustomText
                    title={'Color '}
                    size={WP(3)}
                    color={theme.colors.blacki}
                    textAlign={'center'}
                  />
                  <CustomText
                    title={item.color}
                    size={WP(4)}
                    color={theme.colors.white}
                    textAlign={'center'}
                  />
                </View>
                <View
                  style={{
                    top: 10,
                    alignItem: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    title={'Screen size'}
                    size={WP(3)}
                    color={theme.colors.blacki}
                    textAlign={'center'}
                  />
                  <CustomText
                    title={item.screen}
                    size={WP(4)}
                    color={theme.colors.white}
                    textAlign={'center'}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 0.5,
                  margin: WP(1),
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                  }}>
                  <CustomText
                    title={'Ram '}
                    size={WP(3)}
                    color={theme.colors.blacki}
                    textAlign={'center'}
                  />
                  <CustomText
                    title={item.ram}
                    size={WP(4)}
                    color={theme.colors.white}
                    textAlign={'center'}
                  />
                </View>
                <View
                  style={{
                    top: 10,
                    alignItem: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    title={'Processor'}
                    size={WP(3)}
                    color={theme.colors.blacki}
                    textAlign={'center'}
                  />
                  <CustomText
                    title={item.processor}
                    size={WP(4)}
                    color={theme.colors.white}
                    textAlign={'center'}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItem: 'center',
                // backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <CustomText
                title={'Price : '}
                size={WP(4)}
                color={theme.colors.blacki}
                textAlign={'center'}
              />
              <CustomText
                title={'$ ' + item.price}
                size={WP(4)}
                color={theme.colors.white}
                textAlign={'center'}
              />
            </View>
            <CustomText
              title={item.description}
              size={WP(3)}
              color={theme.colors.blacki}
              textAlign={'center'}
              padding={10}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
