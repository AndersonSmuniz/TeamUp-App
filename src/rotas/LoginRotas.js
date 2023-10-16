import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../templates/Login/Login';
import Cadastro from '../templates/Cadastro/Cadastro';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function AppRotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{animation: 'fade_from_bottom',
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRotas;
