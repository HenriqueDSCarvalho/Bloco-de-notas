import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.topoView}>
                <TouchableOpacity>
                    <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>

                <TextInput
                    style={styles.textInput}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate("Config")}
                >
                    <SimpleLineIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.BottonAdd}
                onPress={() => navigation.navigate("Notas")}
            >
                <Ionicons name="add-circle" size={30} color="black" />
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
        borderWidth: 1
    },
    BottonAdd: {
        position: 'relative',
        flexDirection: 'row-reverse',


    }


});