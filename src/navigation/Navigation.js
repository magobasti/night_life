import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//screens
import Home from "../Screens/Home";
import Locales from "../Screens/Locales";
import Usuario from "../Screens/Usuario";

const Tab=createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Locales" component={Locales}/>
            <Tab.Screen name="Usuario" component={Usuario}/>
        </Tab.Navigator>
    );
}
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );

}