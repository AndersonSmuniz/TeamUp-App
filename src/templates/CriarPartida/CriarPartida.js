import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Logotop from '../components/LogoTop';
import Texto from '../components/Texto';
import Icon from 'react-native-vector-icons/Ionicons';
import imagem1 from '../../../assets/avatar.jpg';


const CriarPartida = () => {
  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <Logotop />
      <View style={styles.container}>
        <TouchableOpacity style={styles.botaoCriar}>
          <Texto style={styles.textoBotao}>Criar Partida</Texto>
        </TouchableOpacity>
      </View>
      <View style={styles.separatorContainer}>
        <View style={styles.separator}></View>
      </View>
      <View style={styles.partidaContainer}>
        <Texto style={styles.partidaTitle}>Partida de Amigos</Texto>


        <View style={styles.card}>
          <View style={styles.topCard}>
            <View style={styles.criador}>
              <Image source={imagem1} style={styles.imagemCriador} />
              <Texto>Nome do criador da partida</Texto>
            </View>
            <View style={styles.textoContainer}>
              <Texto style={styles.texto}>Partida</Texto>
            </View>
            <Icon name="lock-closed" size={30} color="#fff" style={styles.cadeadoIcon} />
          </View>
          <Texto style={styles.textoVS}>Esporte</Texto>


          <View style={styles.conteudoCard}>
            <View style={styles.time}>
              <Image source={imagem1} style={styles.imagemTime} />
              <Texto style={styles.textoNomeTime}>Nome</Texto>
            </View>
            <Texto style={styles.textoVS}>VS</Texto>
            <View style={styles.time}>
              <Image source={imagem1} style={styles.imagemTime} />
              <Texto style={styles.textoNomeTime}>Nome</Texto>
            </View>
          </View>

          <TouchableOpacity style={styles.botaoEntrar}>
            <Texto style={styles.botaoEntrarText}>Entrar</Texto>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '15%',
  },
  botaoCriar: {
    backgroundColor: '#36592C',
    borderRadius: 30,
    paddingHorizontal: '15%',
    paddingVertical: 15,
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  separatorContainer: {
    alignItems: 'center',
  },
  separator: {
    width: '80%', // A largura da linha
    height: 2, // A espessura da linha
    backgroundColor: 'white',
    marginTop: 20, // Espaço acima da linha
    marginBottom: 20, // Espaço abaixo da linha
    shadowColor: 'red', // Cor da sombra branca
    shadowOpacity: 1, // Opacidade da sombra
    shadowOffset: { width: 2, height: 0 }, // Deslocamento da sombra
  },

  partidaContainer: {
    alignItems: 'center',
  },
  partidaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:10
  },

  criador: {
    position: 'absolute',
    bottom: 40,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  imagemCriador: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'center',
    marginRight: 15
  },

  card: {
    backgroundColor: '#222222',
    width: '80%',
    height: 300,
    borderRadius: 15,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: '20%'
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  textoContainer: {
    flex: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E76200',
    textAlign: 'center',
    marginLeft: 20
  },
  cadeadoIcon: {
    fontSize: 25
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
  time: {
    alignContent: "center",
    alignItems: "center",
  },
  textoNomeTime: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },

  botaoEntrar: {
    backgroundColor: '#E76200',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  botaoEntrarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CriarPartida;
