//remotus
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native'
import Routes from './components/Routes/Routes';
import { NavigationContainer } from '@react-navigation/native';


const App = () =>
     <NavigationContainer>
               {/* <Image source={require('./components/img/sysbar.svg')} style={{ height: 24, width: '100%' }} /> */}
               <Routes />
     </NavigationContainer>

export default App

