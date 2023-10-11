import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Logo from '../../../assets/marca/logoTeamUp.png'

import Icon from 'react-native-vector-icons/Ionicons';

export default function Principal() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={Logo} style={estilo.logo} />
          <Text style={estilo.ss}>Home Screen</Text>
        </View>
      );
}

const estilo = StyleSheet.create({
    ss : {
        backgroundColor: 'blue',
        marginHorizontal: '100%',
        marginVertical: '100%',
        color: 'red',
        fontSize: 40
    }
});