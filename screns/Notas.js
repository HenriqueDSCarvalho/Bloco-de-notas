import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notas({ navigation }) {
    const [texto, setTexto] = useState("");

    const saveAndNavigate = async () => {

        const textoLength = texto.length;

        if (textoLength >= 0) {
            const saveTexto = {
                texto: texto
            }
            await asyncStorageSave(saveTexto);

            return navigation.navigate("Home");
        } else {
            console.log('não tem nenhum texto preenchido');
        }
    }
    const asyncStorageSave = async (saveTexto) => {
        try {
            await AsyncStorage.setItem('saveTexto', JSON.stringify(saveTexto));
            console.log('salvou no asyncstorage');
        } catch (error) {
            console.log('erro ao salvar asyncstorage');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="arrow-back-circle-sharp" size={40} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Config")}
                >
                    <SimpleLineIcons name="menu" size={35} color="#ffffff" />

                </TouchableOpacity>
            </View>

            <TextInput
                multiline
                style={styles.TextInput}
                onChangeText={(e) => setTexto(e)}
            />

            <View style={styles.containerBottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={35} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={saveAndNavigate}
                >
                    <AntDesign name="save" size={35} color="#ffffff" />
                </TouchableOpacity>

                <View style={styles.containerleft}>
                    <TouchableOpacity>
                        <Ionicons name="return-up-back" size={30} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="return-up-forward" size={30} color="#ffffff" />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginBottom: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#000000'
    },
    containerTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    containerleft: {
        flexDirection: 'row'
    },
    TextInput: {
        borderWidth: 1,
        textAlignVertical: 'bottom',
        padding: 4,
        height: '75%',
        borderColor: '#ffffff',
        color: '#ffffff'
    },
});