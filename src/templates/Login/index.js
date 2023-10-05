import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import PersonalButton from "./components/PersonalButton";

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <View>
            <TextInput
            placeholder="Login"
            placeholderTextColor="white"
            onChangeText={text => setUsername(text)}
            value={username} 
            style={estilo.input}/>

            <TextInput
            placeholder="Senha"
            placeholderTextColor="white"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true} 
            style={estilo.input}/>  
        </View>
        <PersonalButton texto = {'Entar'}/>
    </>
}
    const screenWidth = Dimensions.get('window').width;
    const inputWidth = screenWidth - 50;

const estilo = StyleSheet.create({
    input:{
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,  
        paddingHorizontal: 8,
        borderRadius: 5,
        width: inputWidth,
        height: 50,
        margin: 7
    }

});