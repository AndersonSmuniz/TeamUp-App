import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Logotop from '../components/LogoTop';
import Texto from '../components/Texto';
import avatarUser from '../../../assets/avatar.jpg';

const Ranking = () => {
    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <Logotop />
            <View style={styles.container}>
                <Texto style={styles.title}>RANKING</Texto>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.BotaoRank}>
                        <Texto>Esporte1</Texto>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BotaoRank}>
                        <Texto>Esporte2</Texto>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.cardRank}>
                        <Texto style={styles.rankNumber}>1</Texto>
                        <Image source={avatarUser} style={styles.imagemAvatar} />
                        <View style={styles.userInfoContainer}>
                            <Texto style={styles.userName}>Nome de Usuário</Texto>
                            <Texto style={styles.userRank}>Ranking</Texto>
                        </View>
                    </View>
                    <View style={styles.cardRank}>
                        <Texto style={styles.rankNumber}>2</Texto>
                        <Image source={avatarUser} style={styles.imagemAvatar} />
                        <Texto style={styles.userName}>Nomeusuao</Texto>
                        <Texto style={styles.userRank}>Ranking</Texto>
                    </View>
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
    },
    title: {
        marginTop: '15%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    botoes: {
        flexDirection: 'row',
        marginTop: 10,
    },
    BotaoRank: {
        backgroundColor: '#E76200',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 30,
        marginHorizontal: 15,
    },
    cardRank: {
        flexDirection: 'row',
        marginVertical: 15,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    userInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      },
    imagemAvatar: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        marginHorizontal: 10,
        borderRadius: 50,
    },
    rankNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        color: '#fff',
        flexWrap: 'wrap',          
    },
    userRank: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: 5,
        marginLeft: 'auto',
    },
});

export default Ranking;
