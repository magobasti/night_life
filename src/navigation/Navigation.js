import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image, Touchable, Button, TextBase } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//screens
import Home from "../Screens/Home";
import Locales from "../Screens/Locales";
import Usuario from "../Screens/Usuario";
import Detalle from "../Screens/Detalle";

const HomeStackNavigator=createNativeStackNavigator();
function Casa(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Catálogo de chicas"
        >
            <HomeStackNavigator.Screen
            name="Catálogo de chicas"
            component={Home}
            options={{
                headerTitleStyle:{alignItems:'center'}
            }}
            />
           <HomeStackNavigator.Screen
            name="Detalle"
            component={Detalle}
            />
        </HomeStackNavigator.Navigator>
    )
}
function Local(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Locales de recreación"
        >
            <HomeStackNavigator.Screen
            name="Locales de recreación"
            component={Locales}
            options={{
                headerTitleStyle:{alignItems:'center'}
            }}
            />
           <HomeStackNavigator.Screen
            name="Detalle"
            component={Detalle}
            />
        </HomeStackNavigator.Navigator>
    )
}
function Usu(){
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Tus datos"
        >
            <HomeStackNavigator.Screen
            name="Tus datos"
            component={Usuario}
            options={{
                headerTitleStyle:{alignItems:'center'}
            }}
            />
        </HomeStackNavigator.Navigator>
    )
}
const Tab=createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Home">

            <Tab.Screen name="Locales" component={Local}
                        options={{
                            tabBarLabel:'Locales',
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                              <View
                                style={{
                                  alignItems: "center",
                                  justifyContent: "center",
                                  top: 10,
                                }}
                              >
                                <Image
                                  source={require("../../assets/Iconos/Local.png")}
                                  resizeMode="contain"
                                  style={{
                                    width: 25,
                                    height: 25,
                                  }}
                                />
                                <Text
                                  style={{ fontSize: 12 }}
                                ></Text>
                              </View>
                            ),
                          }}/>
                          <Tab.Screen name="Home" component={Casa}
            options={{
                tabBarLabel:'Home',
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      top: 10,
                    }}
                  >
                    <Image
                      source={require("../../assets/Iconos/Home.png")}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                    <Text
                      style={{ fontSize: 12 }}
                    ></Text>
                  </View>
                ),
              }}/>
            <Tab.Screen name="Usuario" component={Usu}
                        options={{
                            tabBarLabel:'Cadena',
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                              <View
                                style={{
                                  alignItems: "center",
                                  justifyContent: "center",
                                  top: 10,
                                }}
                              >
                                <Image
                                  source={require("../../assets/Iconos/usuario.png")}
                                  resizeMode="contain"
                                  style={{
                                    width: 25,
                                    height: 25,
                                  }}
                                />
                                <Text
                                  style={{ fontSize: 12 }}
                                ></Text>
                              </View>
                            ),
                          }}/>
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