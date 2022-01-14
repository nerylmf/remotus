
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Pesquisar from "../Pesquisar/Pesquisar";
import Home from "../Home/Home";
import Favoritos from "../Favoritos/Favoritos";
import Perfil from "../Perfil/Perfil";
import Visitados from "../Visitados/Visitados";
// import { Icon } from 'react-native-elements'
import Local from "../Pesquisar/Local";
import RoutesTabs from "./Tabs";
import ListaLugares from "../Pesquisar/ListaLugares";

const MyStack = createStackNavigator();

export default props => (

    <MyStack.Navigator
        screenOptions={{ animationEnabled: false }}
    >
        <MyStack.Screen name='Home' component={RoutesTabs} options={{ headerShown: false }} />
        <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} />

    </MyStack.Navigator>
)


export function HomeNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}


export function PesquisarNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen
                name='Pesquisar'
                component={Pesquisar}
                options={{ headerShown: false }}
            />
            <MyStack.Screen 
            name='ListaPesquisar' 
            component={ListaLugares} 
            options={{ headerShown: false }} />

        </MyStack.Navigator>
    )
}


export function VisitadosNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Visitados' component={Visitados} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}


export function FavoritosNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Favoritos' component={Favoritos} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}

export function PerfilNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}