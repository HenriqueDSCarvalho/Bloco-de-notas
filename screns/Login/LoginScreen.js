import { View, Text, TextInput, Button } from 'react-native';
import styles from './LoginStyle';
import React,{useState} from 'react';

export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>
                login
            </Text>
            <TextInput placeholder="user email" style={styles.input}></TextInput>
            <TextInput secureTextEntry={true} placeholder="user password" style={styles.input}></TextInput>
            <View style={styles.buttonContainer}
            >
                <Button title='login' style={styles.loginButton} onPress={() => navigation.navigate("Home")} />

            </View>
        </View>
    );
}
