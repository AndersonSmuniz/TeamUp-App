import React, { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Topo from '../components/Topo';
import { SelectCountry } from 'react-native-element-dropdown';
import Texto from '../components/Texto';
import { Avatar } from 'react-native-elements';

export default function CadastrarPartida() {
    const [country, setCountry] = useState('1');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [TimeA, setTimeA] = useState('TimeA');
    const [TimeB, setTimeB] = useState('TimeB');
    const local_data = [
        { label: 'Futebol', value: '1' },
        { label: 'Basquete', value: '2' },
    ];

    const handleSubmit = () => {

    };

    return (
        <ScrollView style={{ backgroundColor: '#000'}}>
            <Topo titulo={'Criação Partida'} />

            <View style={styles.form}>
                <View style={styles.esporte}>
                    <Texto>Esporte:</Texto>
                    <SelectCountry
                        style={styles.dropdown}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        maxHeight={200}
                        value={country}
                        data={local_data}
                        valueField="value"
                        labelField="label"
                        placeholder="Esporte"
                        searchPlaceholder="Search..."
                        onChange={e => {
                            setCountry(e.value);
                        }}
                    />

                </View>

                <View style={styles.nomePartida}>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            borderColor: '#fff',
                            marginBottom: 10,
                            width: '80%',
                            color: '#fff'
                        }}
                        placeholder='Nome da partida'
                        placeholderTextColor={'white'}
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>

                <View style={styles.senhaPartida}>
                    <Texto>Senha (opcional):</Texto>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            borderColor: '#fff',
                            marginLeft: 10,
                            marginBottom: 10,
                            width: '30%',
                            color: '#fff'
                        }}
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20
                }}>

                    <View style={styles.time}>
                        <Avatar
                            size={64}
                            rounded
                            title='A'
                            containerStyle={{ backgroundColor: '#1B6822' }}
                        >
                            <Avatar.Accessory size={24} />
                        </Avatar>

                        <TextInput
                            style={{
                                borderBottomWidth: 1,
                                borderColor: '#fff',
                                marginLeft: 10,
                                marginBottom: 10,
                                width: '80%',
                                color: '#fff'
                            }}
                            placeholder='TimeA'
                            placeholderTextColor={'white'}
                            onChangeText={(text) => setTimeA(text)}
                            value={TimeA}
                        />
                    </View>
                    <Texto>Vs</Texto>
                    <View style={styles.time}>
                        <Avatar
                            size={64}
                            rounded
                            title='B'
                            containerStyle={{ backgroundColor: '#E1792C' }}
                        >
                            <Avatar.Accessory size={24} />
                        </Avatar>
                        <TextInput
                            style={{
                                borderBottomWidth: 1,
                                borderColor: '#fff',
                                marginLeft: 10,
                                marginBottom: 10,
                                width: '80%',
                                color: '#fff'
                            }}
                            placeholder='TimeB'
                            placeholderTextColor={'white'}
                            onChangeText={(text) => setTimeB(text)}
                            value={TimeB}
                        />
                    </View>

                </View>
                <View style={styles.criarPartida}>
                    <TouchableOpacity style={styles.botaoEntrar}>
                        <Texto style={styles.botaoEntrarText}>Criar partida</Texto>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    form: {
        flex: 1,
        marginTop: '20%'
    },
    esporte: {
        flexDirection: "row",
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nomePartida: {
        margin: 16,
        justifyContent: 'center'
    },
    senhaPartida: {
        flexDirection: "row",
        margin: 16,
        alignItems: 'center',
    },
    time: {
        flex: 1,
        justifyContent: 'certer',
        alignItems: 'center',
        margin: 10
    },
    criarPartida: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginEnd: 20
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


    dropdown: {
        margin: 16,
        height: 50,
        width: 200,
        backgroundColor: '#222',
        borderRadius: 15,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    selectedTextStyle: {
        fontSize: 20,
        marginLeft: 8,
        color: '#E1792C',
        fontWeight: 'bold'
    },
});