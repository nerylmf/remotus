//remotus
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native'
import Routes from './components/Routes/Routes';


const App = () =>
     <SafeAreaProvider>
          <Image source={require('./components/img/sysbar.svg')} style={{ height: 24, width: '100%' }} />
          <Routes />
     </SafeAreaProvider>

export default App

