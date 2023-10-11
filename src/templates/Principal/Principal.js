import React from "react";
import {  ScrollView, StyleSheet, Text, View } from "react-native";
import Texto from "../components/Texto";
import { styles } from "../../Estilos/estilos";
import ProgressBar from 'react-native-progress/Bar';

export default function Principal() {

    const progress = 0.9;

  return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <View>
                <Texto style={estilosLocal.texto}>OVERALL</Texto>
                <View>
                    <Texto>Progresso: {progress * 100}%</Texto>
                    <ProgressBar progress={progress} width={300} height={20} />
                </View>
            </View>
        </ScrollView>
      );
}

const estilosLocal = StyleSheet.create({
    texto: {
        color: 'white',
        fontSize: 24,
    }
});