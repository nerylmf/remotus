

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Favoritos from "../screens/Favoritos/Favoritos";
import Visitados from "../screens/Visitados/Visitados";
import ListaLugares from "../screens/Pesquisar/ListaLugares/ListaLugares";
import Local from "../screens/Pesquisar/Local/Local";
import RoutesTabs from "./Tabs";
import { Home } from "../screens/Home/Index";
import Pesquisar from "../screens/Pesquisar/pagePesquisar/Pesquisar";
// import { Inicial } from "../screens/Inicial";
import { HomeWorking } from "../screens/HomeWorking";
// import { Perfil } from "../screens/Perfil";
import { Perfil } from "../screens/Perfil/index";


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
            <MyStack.Screen name='HomeTrabalhando' component={HomeWorking} options={{ headerShown: false }} />

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
            <MyStack.Screen name='ListaLugares' component={ListaLugares} options={{ headerShown: false }} />
            {/* <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} /> */}

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
// import React from "react"
// import { createStackNavigator } from "@react-navigation/stack"
// import Favoritos from "../screens/Favoritos/Favoritos";
// import Perfil from "../screens/Perfil/Perfil";
// import Visitados from "../screens/Visitados/Visitados";
// import ListaLugares from "../screens/Pesquisar/ListaLugares/ListaLugares";
// import Local from "../screens/Pesquisar/Local/Local";
// import Pesquisar from "../screens/Pesquisar/pagePesquisar/Pesquisar";
// import RoutesTabs from "./Tabs";
// import { Home } from "../screens/Home/Index";
// import RoutesTabs from "./Tabs";
// import { Inicial } from "../screens/Inicial";
// import { HomeWorking } from "../screens/HomeWorking";
// import { Perfil } from "../screens/Perfil/index";

// const MyStack = createStackNavigator();



// export default props => (

//     <MyStack.Navigator
//         screenOptions={{ animationEnabled: false }}
//     >
//         <MyStack.Screen name='Inicial' component={Inicial} options={{ headerShown: false }} />
//         <MyStack.Screen name='Home' component={RoutesTabs} options={{ headerShown: false }} />
//         <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} />

//     </MyStack.Navigator>
// )


// export function HomeNavigation() {
//     return (
//         <MyStack.Navigator
//             screenOptions={{ animationEnabled: false }}
//         >
//             <MyStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
//             <MyStack.Screen name='HomeTrabalhando' component={HomeWorking} options={{ headerShown: false }} />

//         </MyStack.Navigator>
//     )
// }


// export function PesquisarNavigation() {
//     return (
//         <MyStack.Navigator
//             screenOptions={{ animationEnabled: false }}
//         >
//             <MyStack.Screen
//                 name='Pesquisar'
//                 component={Pesquisar}
//                 options={{ headerShown: false }}
//             />
//             <MyStack.Screen name='ListaLugares' component={ListaLugares} options={{ headerShown: false }} />
//             {/* <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} /> */}

//         </MyStack.Navigator>
//     )
// }


// export function VisitadosNavigation() {
//     return (
//         <MyStack.Navigator
//             screenOptions={{ animationEnabled: false }}
//         >
//             <MyStack.Screen name='Visitados' component={Visitados} options={{ headerShown: false }} />
//         </MyStack.Navigator>
//     )
// }


// export function FavoritosNavigation() {
//     return (
//         <MyStack.Navigator
//             screenOptions={{ animationEnabled: false }}
//         >
//             <MyStack.Screen name='Favoritos' component={Favoritos} options={{ headerShown: false }} />
//         </MyStack.Navigator>
//     )
// }

// export function PerfilNavigation() {
//     return (
//         <MyStack.Navigator
//             screenOptions={{ animationEnabled: false }}
//         >
//             <MyStack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
//         </MyStack.Navigator>
//     )
// }