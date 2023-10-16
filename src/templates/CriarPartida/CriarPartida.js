import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CriarPartida = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Criar Partida</Text>
      {/* Formulário ou conteúdo de criação de partida aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CriarPartida;
