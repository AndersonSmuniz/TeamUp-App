import React from "react";
import { StyleSheet, Text } from "react-native";

import { useFonts, Mulish_400Regular, Mulish_700Bold } from "@expo-google-fonts/mulish";

export default function Texto({ children, style }) {
    const [fontsLoaded, fontError] = useFonts({
        Mulish_400Regular,
        Mulish_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    };

    let estilo = estilos.text;

    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}
const estilos = StyleSheet.create({
    text: {
        fontFamily: 'Mulish_400Regular',
        fontWeight: 'normal',
        color: '#fff' 
    },
    textoNegrito: {
        fontFamily: 'Mulish_700Bold',
        fontWeight: 'normal',
    }
});