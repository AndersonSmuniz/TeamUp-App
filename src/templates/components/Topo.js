import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Texto from './Texto';

const Topo = ({ titulo, navigation, style }) => {


  return (
    <View style={[style,estilos.container]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={estilos.backButton}>
        <Icon name="arrow-back-outline" size={30} color="#1B6822" />
      </TouchableOpacity>
      <Texto style={estilos.title}>{titulo}</Texto>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    marginTop: 15,
    width:'100%',
    
  },
  backButton: {
    position: 'absolute',
    left:15
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    left:'10%'
  },
});

export default Topo;
