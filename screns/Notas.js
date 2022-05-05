import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';

export default function Notas({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Config")}
                >
                    <SimpleLineIcons name="menu" size={35} color="black" />


                </TouchableOpacity>
            </View>
            <View>

                <TextInput />

            </View>

            <View style={styles.containerBottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={35} color="black" />
                </TouchableOpacity>

                <View style={styles.containerleft}>
                    <TouchableOpacity>
                        <Ionicons name="return-up-back" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="return-up-forward" size={30} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    containerTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerleft: {
        flexDirection: 'row'
    },

});
