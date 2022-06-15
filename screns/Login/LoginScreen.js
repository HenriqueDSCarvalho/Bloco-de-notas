import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import styles from './LoginStyle';

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
