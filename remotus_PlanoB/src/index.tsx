import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

// import { AppRoutes } from './routes';
import theme from './global/styles/theme';
import AppRoutes from './Routes/index';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    Updates.addListener(listener => {
      if (listener.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
        Alert.alert(
          'Nova atualização',
          'Existe uma nova atualização disponivel, para continuar é necessário reiniciar o aparelho.',
          [
            {
              text: 'Fazer isso depois',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Reiniciar agora', onPress: () => Updates.reloadAsync() },
          ],
          { cancelable: false },
        );
      }
    });
  }, []);

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
        <AppRoutes />
    </ThemeProvider>
  );
}
