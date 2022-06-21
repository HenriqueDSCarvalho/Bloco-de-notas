import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputText from '../src/DB/Components.js/InputText';

export default function Home({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(user);
            setEmail(parsedUser.email);
            setPassword(parsedUser.password);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.topoView}>

                <TouchableOpacity>
                    <FontAwesome name="search" size={35} color="#ffffff" />
                </TouchableOpacity>

                <InputText />

                <TouchableOpacity onPress={() => navigation.navigate("Config")}>
                    <SimpleLineIcons name="menu" size={35} color="#ffffff" />
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                style={styles.BottonAdd}
                onPress={() => navigation.navigate("Notas")}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottonAdd}
                onPress={() => navigation.navigate("Notas")}
            >
                <Ionicons name="add-circle" size={40} color="#ffffff" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#000000'
    },
    topoView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    textInput: {

        width: 200,
        borderWidth: 1,
        borderRadius: 5
    },
    BottonAdd: {
        position: 'relative',
        flexDirection: 'row-reverse',
    }
});