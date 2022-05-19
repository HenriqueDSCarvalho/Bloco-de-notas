import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import download from '../assets/download.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveAndNavigate = async () => {

        const emailLength = email.length;
        const passwordLength = password.length;

        if (emailLength > 0 && passwordLength > 0) {
            const user = {
                email: email,
                password: password
            }
            await asyncStorageSave(user);

            return navigation.navigate("Home");
        } else {
            console.log('preencher todos os campos');
        }
    }

    const asyncStorageSave = async (user) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            console.log('salvou no asyncstorage');
        } catch (error) {
            console.log('erro ao salvar asyncstorage');
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={download} style={styles.logo}
                />
            </View>
            <Text style={styles.title}>
                login
            </Text>
            <TextInput onChangeText={(e) => setEmail(e)} placeholder="user email" style={styles.input}></TextInput>
            <TextInput onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholder="user password" style={styles.input}></TextInput>
            <View style={styles.buttonContainer}
            >
                <Button title='login' style={styles.loginButton} onPress={saveAndNavigate} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 200
    },
    input: {
        marginTop: 20,
        height: 50,
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        padding: 10

    },
    buttonContainer: {
        marginTop: 20,
        width: '90%',
        height: 150,
    },
    loginButton: {
        width: '60%'
    }

});