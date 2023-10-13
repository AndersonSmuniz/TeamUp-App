import React from "react";
import Texto from "./Texto";
import { StyleSheet, View } from "react-native";

const GameCard = () => {
    return <View style={estilos.card}>
        <Texto>JOGO 1</Texto>
    </View>
}
const estilos = StyleSheet.create({
    card: {

    }
})
export default GameCard;