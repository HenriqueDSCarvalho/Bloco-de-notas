import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import download from '../assets/download.png';

export default function LoginScreen({ navigation }) {
    const saveAndNavigate = () => {
        navigation.navigate("Home");
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
            <TextInput placeholder="user email" style={styles.input}></TextInput>
            <TextInput secureTextEntry={true} placeholder="user password" style={styles.input}></TextInput>
            <View style={styles.buttonContainer}
            >
                <Button title='login' style={styles.loginButton} onPress={saveAndNavigate}/>

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