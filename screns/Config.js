import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons, AntDesign, Ionicons } from '@expo/vector-icons';


export default function Config({ navigation }) {
    return (
        <View style={styles.container}>
            <View >

                <View style={styles.containertop}>
                    <Text>
                        todas as notas
                    </Text>
                    <TouchableOpacity>
                        <SimpleLineIcons name="notebook" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={24} color="black" />

                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containertop: {
        flexDirection: 'row-reverse',
        alignContent: 'flex-start'
    }

});