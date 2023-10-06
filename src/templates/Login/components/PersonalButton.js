import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Texto from "./Texto";

export default function PersonalButton({ texto, style }) {

    return <Pressable onPress={'ok'} style={[style, estilos.btn]}>
        <Texto style={estilos.texto}>{texto}</Texto>
    </Pressable>
}

const estilos = StyleSheet.create({
    btn: {
        backgroundColor: '#E1792C',
        borderWidth: 2,
        borderRadius: 31,
        margin: 14,
        paddingHorizontal: 120,
        paddingVertical: 15,

    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    }
})