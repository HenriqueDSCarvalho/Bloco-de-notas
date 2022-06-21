import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Login
            </Text>
            <TextInput placeholder='enter email' style={styles.input}></TextInput>
            <TextInput placeholder='enter password' style={styles.input}></TextInput>            
            <View style={styles.buttonContainer}>
                <Button title='login' color='#000080' onPress={() => navigation.navigate("Home")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',      
    },
    input: {
        marginTop: 20,
        height: 50,
        width: '80%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#fff',
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 20,
        width: '80%',
        height: 50,
    },
    button: {
        backgroundColor: '#000080',
        height: 30,
        width: '80%'       
    },
});