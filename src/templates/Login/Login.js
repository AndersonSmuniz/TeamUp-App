import React, { useState } from "react";
import {
    Dimensions, Image, StyleSheet,
    TextInput, TouchableHighlight, TouchableOpacity, View, Alert
} from "react-native";

import separador from '../../../assets/separador.png';
import google from '../../../assets/icons/google.png';
import facebook from '../../../assets/icons/Facebook.png';
import apple from '../../../assets/icons/apple.png';
import Logo from '../../../assets/marca/logoTeamUp.png';
import NomeLogo from '../../../assets/marca/NomeLogo.png';

import { loginUsuario } from "../../../servicos/requisicoes/usuarios";
import { styles } from '../../Estilos/estilos';

import Texto from "../components/Texto";

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuario, setUsuario] = useState('');

    async function entrar() {
        try {
            const resultado = await loginUsuario(email, senha);
            if (resultado) {
                setUsuario(resultado);
                console.log(resultado);
            } else {
                Alert.alert('Usuário não encontrado!');
                console.log(resultado);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.conteudo}>
            <View>
                <View style={estilosTela.logoMarca}>
                    <Image source={Logo} style={estilosTela.logo} />
                    <Image source={NomeLogo} style={estilosTela.NomeLogo} />
                </View>
                <TextInput
                    placeholder="Login"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={estilosTela.input}
                />

                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="white"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    style={estilosTela.input} />

                <TouchableOpacity onPress={entrar}>
                    <Texto style={estilosTela.forgotPassword}>Esqueceu sua senha?</Texto>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={entrar}
                style={estilosTela.btn}>
                <Texto style={estilosTela.texto}>Entrar</Texto>
            </TouchableOpacity>

            <View style={estilosTela.conteiner}>
                <Image style={estilosTela.separatorLeft} source={separador} />
                <Texto>Ou entre com</Texto>
                <Image style={estilosTela.separatorRigth} source={separador} />
            </View>
            <View style={estilosTela.conteiner}>

                <TouchableHighlight onPress={'openLink'}>
                    <Image style={estilosTela.icons} source={google} />
                </TouchableHighlight>

                <TouchableHighlight onPress={'openLink'}>
                    <Image style={estilosTela.icons} source={facebook} />
                </TouchableHighlight>

                <TouchableHighlight onPress={'openLink'}>
                    <Image style={estilosTela.icons} source={apple} />
                </TouchableHighlight>
            </View>
            <View style={estilosTela.linkRecuperar}>
                <Texto >Não tem conta?</Texto>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Texto style={estilosTela.forgotPassword}>Criar conta</Texto>
                </TouchableOpacity>
            </View>
        </ View>
    );
}
const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 50;

const estilosTela = StyleSheet.create({
    logoMarca: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginVertical: 30,
    },
    logo: {
        height: 100,
        margin: 16,
        resizeMode: 'contain',

    },
    NomeLogo: {
        width: inputWidth - 50,
        margin: 10,
        resizeMode: 'contain',
    },


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
        marginBottom: '20%',
        marginVertical: '5%',
        flexDirection: 'row',

    },

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
});