import React from "react";
import Texto from "./Texto";
import { Image, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import imagem1 from '../../../assets/avatar.jpg';

const GameCard = () => {
    return <View style={estilos.card}>
        <Texto style={estilos.texto}>Próxima Partida</Texto>
        <View style={estilos.conteudoCard}>
            <View style={estilos.time}>
                <Image source={imagem1} style={estilos.imagemTime} />
                <Texto style={estilos.textoNomeTime}>Nome</Texto>
            </View>
            <Texto style={estilos.textoVS}>VS</Texto>
            <View style={estilos.time}>
                <Image source={imagem1} style={estilos.imagemTime} />
                <Texto  style={estilos.textoNomeTime}>Nome</Texto>
            </View>
        </View>

        <Icon name="add" size={40} color="orange" style={estilos.botaoInfo}/>
    </View>
}
const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#222222',
        width: '80%',
        height: 240,
        borderRadius: 15,
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        margin: 45,
    },
    texto: {
        color: '#1B6822',
        fontWeight: 'bold',
        fontSize: 23,
        marginBottom: 25
    },
    textoVS: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginHorizontal: 25,
        textAlignVertical: 'bottom'
    },
    imagemTime: {
        width: 90,
        height: 90,
        borderRadius: 50,
        resizeMode: 'center'
    },
    conteudoCard: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    time:{
        alignContent: "center",
        alignItems: "center",
    },
    textoNomeTime: {
        color:'#fff',
        fontWeight: 'bold',
        marginTop: 10,
    },
    botaoInfo: {
        marginTop: 18,
    }
})
export default GameCard;