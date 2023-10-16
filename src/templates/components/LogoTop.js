import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import nomeLogo from '../../../assets/marca/NomeLogo.png'

const Logotop = () => {
    return <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
            <Icon name="notifications" size={30} color="#fff" />
        </TouchableOpacity>
        <Image source={nomeLogo} style={styles.logoImage} />
        <TouchableOpacity style={styles.iconContainer}>
            <Icon name="settings-sharp" size={30} color="#fff" />
        </TouchableOpacity>

    </View>
}
const styles = StyleSheet.create({
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
});

export default Logotop;