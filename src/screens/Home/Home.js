import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  BackHandler,
  ActivityIndicator,
  StatusBar,
  Platform,
} from 'react-native';
import styles from './styles';
import {MobileListItem, AppHeader, CustomText} from '../../components';
import {mobiles} from '../../redux';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {HP} from '../../utils';
import {menu} from '../../assets';
import theme from '../../theme';

const Home = ({navigation}) => {
  //--------------------
  //redux
  const dispatch = useDispatch();
  const {isLoading, storeMobiles} = useSelector(state => state.auth);
  const [mobilesList, setmobilesList] = useState([]);

  //handling Backhandler
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return BackHandler.removeEventListener();
  }, [handleBackButton]);

  const handleBackButton = () => {
    if (navigation.isFocused()) {
      BackHandler.exitApp();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getMobiles();
  }, []);

  //get Mobiles List api
  const getMobiles = () => {
    let data = new FormData();
    data.append('Phones', 'list');
    console.log(data);
    const cbSuccess = data => {
      console.log('[login success]', data);
      setmobilesList(data);
    };
    const cbFailure = err => {
      console.log('[login fail]', err);
      alert(err || 'SERVER_ERROR');
    };
    dispatch(mobiles(data, cbSuccess, cbFailure));
  };

  const onItemPress = item => {
    navigation.navigate('DetailScreen', {
      item: item,
    });
  };

  const renderItem = ({item}) => {
    return <MobileListItem item={item} onPress={() => onItemPress(item)} />;
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      {Platform.OS === 'android' ? <View style={{height: HP(5)}} /> : null}
      <AppHeader
        left={
          <View style={{padding: 10}}>
            <Image
              source={menu}
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
            title={'Mobiles'}
            textAlign={'center'}
            type={'normal'}
            size={18}
          />
        }
        onLeftPress={() => navigation.toggleDrawer()}
      />
      {isLoading ? (
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : (
        <FlatList
          data={mobilesList}
          // data={storeMobiles}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
