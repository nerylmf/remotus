import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Pesquisar from "../Pesquisar/Pesquisar";
// import RoutesTabs from "./Tabs";
import Stack from "./Stack";

export default function RoutesNova() {
   return(
   <NavigationContainer>
        <Stack/>
    </NavigationContainer>
   )}
