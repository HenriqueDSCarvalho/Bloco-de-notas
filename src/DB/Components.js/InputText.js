import { StyleSheet, TextInput, View } from 'react-native';

function InputText(props) {
    return (

        <TextInput style={styles.input}></TextInput>

    )
}

export default InputText;

const styles = StyleSheet.create({

    input: {
        height: 40,
        width: '70%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        textAlign: 'center'

    },
});