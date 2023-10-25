import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../templates/Principal/Principal';
import CriarPartida from '../templates/CriarPartida/CriarPartida';
import Ranking from '../templates/Ranking/Ranking';
import { Image, View } from 'react-native';

import IconPerfil from '../../assets/icons/tabBar/IconPerfil.png'
import IconRank from '../../assets/icons/tabBar/IconRank.png'
import IconCriarPartida from '../../assets/icons/tabBar/IconCriarPartida.png'

const Tab = createBottomTabNavigator();

function TabBarRotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Principal"
                screenOptions={({ route }) => ({
                    "tabBarShowLabel": false,
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "#222222",
                        borderColor: "#222222",
                        height: 60,
                        paddingTop: 5,
                    },
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        let backgroundColor = 'transparent';

                        if (route.name === 'Principal') {
                            iconName = IconPerfil;
                        } else if (route.name === 'Criar Partida') {
                            iconName = IconCriarPartida;
                        } else if (route.name === 'Ranking') {
                            iconName = IconRank;
                        }

                        if (focused) {
                            backgroundColor = '#E76200';
                        }

                        return (
                            <View style={{
                                backgroundColor,
                                padding: 10,
                                borderRadius: 50,
                                width: 80,
                                alignItems: 'center',

                            }}>
                                <Image source={iconName} style={{
                                    width: 25,
                                    height: 25,
                                    resizeMode: 'contain'
                                }} />
                            </View>
                        );
                    },
                })}
            >
                <Tab.Screen name='Ranking' component={Ranking} />
                <Tab.Screen name='Principal' component={Principal} />
                <Tab.Screen name='Criar Partida' component={CriarPartida} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default TabBarRotas;
