// //remotus
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Image, StyleSheet } from 'react-native'
// import Routes from './components/Routes/Routes';
// import { NavigationContainer } from '@react-navigation/native';
// import RoutesTeste from './components/Routes/RoutesTesteLocal';
// import TabRoutes from './components/teste/Routes';
// import RoutesNova from './components/Routes/RoutesNovo';


// const App = () =>
//      // <NavigationContainer >
//           <SafeAreaProvider > 

//                {/* <Image source={require('./components/img/sysbar.svg')} style={{ height: 24, width: '100%' }} /> */}
//                {/* <RoutesExemplo />
//                 */}
//                 {/* <Routes /> */}
//                 {/* <RoutesTeste /> */}
//                 <RoutesNova />
//                 {/* <TabRoutes /> */}
//           </SafeAreaProvider> 
//      //  </NavigationContainer>  


// export default App

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

import theme from './src/global/styles/theme';
import RoutesNova from './src/Routes/RoutesNovo';

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
        <RoutesNova />
    </ThemeProvider>
  );
}





// //remotus
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Image, StyleSheet } from 'react-native'
// import Routes from './components/Routes/Routes';
// import { NavigationContainer } from '@react-navigation/native';


// const App = () =>
//      // <NavigationContainer >
//           <SafeAreaProvider style={styles.container}> 

//                {/* <Image source={require('./components/img/sysbar.svg')} style={{ height: 24, width: '100%' }} /> */}
//                <Routes />
//           </SafeAreaProvider> 
//      //  </NavigationContainer>  

// const styles = StyleSheet.create({
//      container:{
//           // flex:1,
//           // backgroundColor:'white'
//      }
// })
// export default App









// import React from "react"
// import { NavigationContainer } from "@react-navigation/native"
// import { createStackNavigator } from "@react-navigation/stack"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Pesquisar from "./components/Pesquisar/Pesquisar";
// import Home from "././components/Home/Home";
// import Favoritos from "././components/Favoritos/Favoritos";
// import Perfil from "././components/Perfil/Perfil";
// import Visitados from "././components/Visitados/Visitados";
// // import { Icon } from 'react-native-elements'
// import { ButtonVisitados, ButtonFavoritos, ButtonPerfil, ButtonPesquisar, ButtonHome } from "./components/Routes/Buttons"
// import ListaPesquisar from '././components/Pesquisar/PageListaLugares'
// import pagePesquisar from "././components/Pesquisar/TestePagePesquisar2em1";
// import { FavoritosScreen, HomeScreen, PerfilScreen, PesquisarScreen, VisitadosScreen } from "./RoutesCustom";

// const Tab = createBottomTabNavigator()


// // function Tabs() {
// // const App: () => React$Node = () => {
// const App = () =>{
//      return (
          
//                <NavigationContainer>
//                     <Tab.Navigator
//                          initialRouteName="Pesquisar"
//                          tabBarOptions={{
//                               style: {
//                                    backgroundColor: '#0D1321',
//                                    borderTopColor: 'transparent',
//                                    height: 80,
//                                    width: '100%',
//                                    paddingHorizontal: 10,

//                               },

//                               // tabStyle: {
//                               //     // paddingHorizontal: 16,
//                               //     // paddingVertical: 14,
//                               //     // marginHorizontal:16,
//                               //     // marginVertical:14
//                               //     alignItems:'center',
//                               //     justifyContent:'center'
//                               // }
//                          }}
//                     >
//                          <Tab.Screen
//                               name='Home'
//                               // component={Home}
//                               component={HomeScreen}
//                               options={{
//                                    tabBarLabel: '',
//                                    tabBarIcon: ({ focused, color }) => (
//                                         <ButtonHome color={color} focused={focused} />
//                                    )
//                               }}
//                          />

//                          <Tab.Screen
//                               name='Pesquisar'
//                               // component={Pesquisar}
//                               // component={ListaPesquisar}
//                               // component={pagePesquisar}
//                               component={PesquisarScreen}
//                               options={{
//                                    tabBarLabel: '',
//                                    tabBarIcon: ({ focused, color }) => (
//                                         <ButtonPesquisar color={color} focused={focused} />
//                                    )
//                               }}
//                          />

//                          <Tab.Screen
//                               name="Visitados"
//                               // component={Visitados}
//                               component={VisitadosScreen}
//                               options={{
//                                    tabBarLabel: '',
//                                    tabBarIcon: ({ focused, color }) => (
//                                         <ButtonVisitados color={color} focused={focused} />
//                                    )
//                               }}
//                          />

//                          <Tab.Screen
//                               name='Favoritos'
//                               // component={Favoritos}
//                               component={FavoritosScreen}
//                               options={{
//                                    tabBarLabel: '',
//                                    tabBarIcon: ({ focused, color }) => (
//                                         <ButtonFavoritos color={color} focused={focused} />
//                                    )
//                               }}
//                          />

//                          <Tab.Screen
//                               name='Perfil'
//                               // component={Perfil}
//                               component={PerfilScreen}
//                               options={{
//                                    tabBarLabel: '',
//                                    tabBarIcon: ({ focused, color }) => (
//                                         <ButtonPerfil color={color} focused={focused} />
//                                    )
//                               }}
//                          />


//                     </Tab.Navigator>
//                </NavigationContainer>
          
//      )
// }



// export default App 