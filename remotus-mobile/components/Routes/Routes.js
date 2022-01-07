import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Pesquisar from "../Pesquisar/Pesquisar";
import Home from "../Home/Home";
import Favoritos from "../Favoritos/Favoritos";
import Perfil from "../Perfil/Perfil";
import Visitados from "../Visitados/Visitados";
import { ButtonVisitados, ButtonFavoritos, ButtonPerfil, ButtonPesquisar, ButtonHome } from "./Buttons"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


// function Tabs() {
export default function Routes() {

return (
        <Tab.Navigator
            initialRouteName="Pesquisar"
            tabBarOptions={{
                style: {
                    backgroundColor: '#0D1321',
                    borderTopColor: 'transparent',
                    height: 80,
                    width: '100%',
                    paddingHorizontal:10,
                    
                },

                // tabStyle: {
                //     // paddingHorizontal: 16,
                //     // paddingVertical: 14,
                //     // marginHorizontal:16,
                //     // marginVertical:14
                //     alignItems:'center',
                //     justifyContent:'center'
                // }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color }) => (
                        <ButtonHome color={color} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name='Pesquisar'
                component={Pesquisar}
                // component={ListaPesquisar}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color }) => (
                        <ButtonPesquisar color={color} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name="Visitados"
                component={Visitados}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color }) => (
                        <ButtonVisitados color={color} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name='Favoritos'
                component={Favoritos}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color }) => (
                        <ButtonFavoritos color={color} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color }) => (
                        <ButtonPerfil color={color} focused={focused} />
                    )
                }}
            />


        </Tab.Navigator>
    )
}