//remotus
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './components/Routes/Routes';


const App = () =>
          <SafeAreaProvider > 
               <Image source={require('./components/img/sysbar.svg')} style={{ height: 24, width: '100%' }} />
               <Routes />
          </SafeAreaProvider> 


export default App



