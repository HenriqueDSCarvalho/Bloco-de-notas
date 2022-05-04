import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.topoView}>
                <TouchableOpacity>
<<<<<<< HEAD
                    <FontAwesome name="search" size={30} color="black" />
=======
                    <FontAwesome name="search" size={35} color="black" />
>>>>>>> ba19ef5510b7ed7965c632512273687d62d40967
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("Config")}
                >
                    <SimpleLineIcons name="menu" size={35} color="black" />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.BottonAdd}
                onPress={() => navigation.navigate("Notas")}
            >
<<<<<<< HEAD
                <Ionicons name="add-circle" size={35} color="black" />
=======
                <Ionicons name="add-circle" size={40} color="black" />
>>>>>>> ba19ef5510b7ed7965c632512273687d62d40967
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