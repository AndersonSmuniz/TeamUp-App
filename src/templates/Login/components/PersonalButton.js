import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function PersonalButton({texto}) {

    return <Pressable onPress={'ok'} style={estilo.btn}>
        <Text style={estilo.texto}>{texto}</Text>
    </Pressable>
}
const estilo = StyleSheet.create({
    btn:{
        backgroundColor: '#E1792C',
        borderWidth: 2,
        borderRadius: 31,
        paddingHorizontal: 50,
        paddingVertical: 10,
        margin: 14,
    
    },
    texto:{
        color: 'white',
    }
})