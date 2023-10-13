import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, ProgressBarAndroidBase } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import nomeLogo from '../../../assets/marca/NomeLogo.png'
import Texto from '../components/Texto';
import { Line, Svg } from 'react-native-svg';
import card from '../../../assets/cards/gold/card.png'
import CustomProgressBar from './CustomProgressBar';
import GameCard from '../components/Gamecard';

export default function Principal() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.01);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);


  return (
    <ScrollView style={{ backgroundColor: '#000' }}>
      <View style={styles.header}>
        {/*Fazer um componente*/}
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="notifications" size={30} color="#fff" />
        </TouchableOpacity>
        <Image source={nomeLogo} style={styles.logoImage} />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="settings-sharp" size={30} color="#fff" />
        </TouchableOpacity>

      </View>
      <View style={styles.centerContainer}>
        <Svg height="1" width="100">
          <Line x1="1" y1="0.5" x2="199" y2="0.5" stroke="white" strokeWidth="1" />
        </Svg>
        <Texto style={styles.name}>Usuário</Texto>
        <Svg height="1" width="200">
          <Line x1="1" y1="0.5" x2="199" y2="0.5" stroke="white" strokeWidth="1" />
        </Svg>
      </View>

      <View style={styles.centerContainer}>
        <Image source={card} style={styles.card} />
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../assets/marca/avatar.jpg')}
            style={styles.avatar}
          />
          <View style={styles.infoContent}>
            <View>
              <Text style={styles.infoTitle}>ATACANTE</Text>
            </View>
            <View style={styles.info}>
              <View style={styles.labelValueContainer}>
                <Text style={styles.infoText}>Partidas:</Text>
                <Text style={styles.infoText}>10</Text>
              </View>
              <View style={styles.labelValueContainer}>
                <Text style={styles.infoText}>Gols:</Text>
                <Text style={styles.infoText}>10</Text>
              </View>
              <View style={styles.labelValueContainer}>
                <Text style={styles.infoText}>Pass:</Text>
                <Text style={styles.infoText}>10</Text>
              </View>
            </View>
          </View> 
        </View>
        
      </View >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Texto style={styles.tituloOverall}>OVERALL</Texto>
          <CustomProgressBar total={1000} current={750}/>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: '10%'}}>
          <Texto style={{fontSize:30, fontWeight:'bold', color: '#fff'}}>Meus Jogos</Texto>

          <GameCard />
        </View>
    </ScrollView>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    marginTop: '5%',
  },
  iconContainer: {
    paddingHorizontal: 15,
  },
  logoImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  centerContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    textShadowColor: 'rgba(0, 3, 0, 0.90)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  card: {
    height: 400,
    marginTop: 20,
    resizeMode: 'contain',
  },
  avatarContainer: {
    position: 'absolute',
    top: '30%',
    transform: [{ translateY: -25 }],
  },
  avatar: {
    width: 200,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  tituloOverall:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#45E12C',
    fontSize: 20    
  },
  infoContent: {
    backgroundColor: '#F0CB2D',
    margin: 5,
    paddingBottom: 55,
    borderBottomLeftRadius: 60, 
    borderBottomRightRadius: 60,
    flex:1,
  },
  infoTitle: {
    left: 50,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop:5
  },
  info: {
    marginHorizontal: 10,
  },
  labelValueContainer: {
    flexDirection: 'row',
  },
  infoText:{
    fontWeight: 'bold',
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    fontSize: 16
  }
};
