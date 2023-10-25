import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native";

import { criarLogin } from "../../../servicos/requisicoes/usuarios";
import { styles } from '../../Estilos/estilos';
import Topo from '../components/Topo'
import Texto from "../components/Texto";

export default function Cadastro({navigation}) {

    const [apelido, setApelido] = useState('');
    const [nome, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');

    async function criarUsuario() {
        try {
            const resultado = await criarLogin(apelido, nome, email, senha, senhaConfirmar);

            if (resultado) {

                console.log(resultado.data);
            }
        } catch (error) {
            console.error('O erro', error);
        }
    };



    return (<ScrollView style={{ backgroundColor: '#000' }}>
        <Topo titulo={'Cadastro'} style={estilos.topo} navigation={navigation}/>
        <View style={[styles.conteudo]}>

            <TextInput
                placeholder="Apelido"
                autoCapitalize="none"
                placeholderTextColor="white"
                value={apelido}
                onChangeText={text => setApelido(text)}
                style={estilos.input}
            />

            <TextInput
                placeholder="Nome Completo"
                autoCapitalize="none"
                placeholderTextColor="white"
                value={nome}
                onChangeText={text => setUsername(text)}
                style={estilos.input}
            />
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="white"
                value={email}
                onChangeText={text => setEmail(text)}
                style={estilos.input}
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor="white"
                secureTextEntry={true}
                value={senha}
                onChangeText={text => setSenha(text)}
                style={estilos.input} />
            <TextInput
                placeholder="Confirmar Senha"
                placeholderTextColor="white"
                secureTextEntry={true}
                value={senhaConfirmar}
                onChangeText={text => setSenhaConfirmar(text)}
                style={estilos.input} />

            <TouchableOpacity onPress={criarUsuario}
                style={estilos.btn}>
                <Texto style={estilos.texto}>Criar</Texto>
            </TouchableOpacity>

        </View>

    </ScrollView>
    );
}
const screenWidth = Dimensions.get('window').width;
const inputWidth = screenWidth - 50;

const estilos = StyleSheet.create({
    topo: {
        marginBottom: '20%'
    },

    input: {
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 5,
        width: inputWidth,
        height: 55,
        margin: 14,
    },
    btn: {
        backgroundColor: '#E1792C',
        borderWidth: 2,
        borderRadius: 31,
        margin: 14,
        paddingHorizontal: 120,
        paddingVertical: 15,
        marginTop: 20

    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    }
});
