import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons, Entypo, Ionicons } from '@expo/vector-icons';

export default function Config({ navigation }) {
    return (
        <View style={styles.container}>
            <View >

                <View style={styles.containertop}>
                    <Text style={styles.texto}>
                        todas as notas
                    </Text>
                    <TouchableOpacity>
                        <SimpleLineIcons name="notebook" size={35} color="#ffffff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containertop}>
                    <Text style={styles.texto}>
                        Login
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Entypo name="login" size={35} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerStart}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={35} color="#ffffff" />

                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'

    },
    containertop: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingTop: 20
    },
    containerStart: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'flex-start',
        paddingBottom: 20,
        paddingLeft: 20

    },
    texto: {
        color: '#fff',
        fontWeight: 'bold'
    },

});