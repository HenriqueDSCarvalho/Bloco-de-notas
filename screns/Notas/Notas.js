import { View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import styles from './NotasStyle';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Notas({ navigation }) {
    const [texto, setTexto] = useState("");

    const saveAndNavigate = async () => {

        const textoLength = texto.length;

        if (textoLength > 0) {
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
                    <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Config")}
                >
                    <SimpleLineIcons name="menu" size={35} color="black" />


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
                    <Ionicons name="home" size={35} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={saveAndNavigate}
                >
                    <AntDesign name="save" size={35} color="black" />
                </TouchableOpacity>

                <View style={styles.containerleft}>
                    <TouchableOpacity>
                        <Ionicons name="return-up-back" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="return-up-forward" size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

