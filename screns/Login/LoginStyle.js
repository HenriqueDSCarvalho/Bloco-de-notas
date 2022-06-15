import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
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