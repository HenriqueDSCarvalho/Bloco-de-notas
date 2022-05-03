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

                <TouchableOpacity>
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
        flex: 1
    },
    topoView: {
        padding: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    textInput: {
        padding: 4,
        width: 200,
        borderWidth: 1
    },
    BottonAdd: {
        padding: 4,
        position: 'relative',
        flexDirection: 'row-reverse',
        

    }


});