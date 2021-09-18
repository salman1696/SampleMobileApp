import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  logo: {
    bottom: 40,
    width: Platform.isPad ? 320 : 250,
    height: Platform.isPad ? 150 : 130,
  },
});

export default styles;
