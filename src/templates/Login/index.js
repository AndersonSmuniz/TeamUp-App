import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import PersonalButton from "./components/PersonalButton";

import separador from '../../../assets/separador.png'
import google from '../../../assets/google.png'
import facebook from '../../../assets/Facebook.png'
import apple from '../../../assets/apple.png'

import Texto from "./components/Texto";

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
                style={estilos.input} />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="white"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                style={estilos.input} />

            <TouchableOpacity onPress={'handleForgotPassword'}>
                <Texto style={estilos.forgotPassword}>Esqueceu sua senha?</Texto>
            </TouchableOpacity>
        </View>

        <PersonalButton texto={'Login'} />

        <View style={estilos.conteiner}>
            <Image style={estilos.separatorLeft} source={separador} />
            <Texto>Ou entre com</Texto>
            <Image style={estilos.separatorRigth} source={separador} />
        </View>
        <View style={estilos.conteiner}>

            <TouchableHighlight onPress={'openLink'}>
                <Image style={estilos.icons} source={google} />
            </TouchableHighlight>

            <TouchableHighlight onPress={'openLink'}>
                <Image style={estilos.icons} source={facebook} />
            </TouchableHighlight>

            <TouchableHighlight onPress={'openLink'}>
                <Image style={estilos.icons} source={apple} />
            </TouchableHighlight>
        </View>
        <View style={estilos.linkRecuperar}>
            <Texto >Não tem conta?</Texto>
            <TouchableOpacity onPress={'handleForgotPassword'}>
                <Texto style={estilos.forgotPassword}>Criar conta</Texto>
            </TouchableOpacity>
        </View>


    </>
}
const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 50;

const estilos = StyleSheet.create({
    input: {
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 5,
        width: inputWidth,
        height: 50,
        margin: 7,
    },
    forgotPassword: {
        color: '#fff',
        textAlign: 'right',
        paddingEnd: 10,
        paddingLeft: 5,
        fontWeight: 'bold'

    },
    separatorLeft: {
        transform: [{ rotate: '180deg' }],
        margin: 10
    },
    separatorRigth: {
        margin: 10
    },
    conteiner: {
        flexDirection: 'row',
        margin: 14,
    },
    icons: {
        marginHorizontal: 20,
        marginTop: 15,
        width: 50,
        padding: 30
    },
    linkRecuperar: {
        margin: 33,
        flexDirection: 'row',

    }
});