// import React from 'react';
// import {Text, View} from 'react-native';

// const App = ({params}) => {
//   React.useEffect(() => {
//     fetch('http://mywebsite.com/endpoint/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstParam: 'yourValue',
//         secondParam: 'yourOtherValue',
//       }),
//     })
//       .then(res => console.log('res=======', res))
//       .catch(err => console.log('error', err));
//   }, []);

//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   );
// };

// export default App;


import React, {useEffect, useRef} from 'react';
//import MainNavigation from './src/navigation';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persister, store} from './src/redux/store';
// import I18n from 'react-native-i18n';
import {NetworkProvider} from 'react-native-offline';
// import messaging from '@react-native-firebase/messaging';
// import Toast from 'react-native-toast-message';

console.disableYellowBox = true;

const App = ({params}) => {
 

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <MainNavigation />

      </PersistGate>
    </Provider>
  );
};

export default App;
