import { View, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Entypo, Ionicons } from '@expo/vector-icons';
import styles from './ConfigStyle';

export default function Config({ navigation }) {
    return (
        <View style={styles.container}>
            <View >

                <View style={styles.containertop}>
                    <Text>
                        todas as notas
                    </Text>
                    <TouchableOpacity>
                        <SimpleLineIcons name="notebook" size={35} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containertop}>
                    <Text>
                        Login
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Entypo name="login" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerStart}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={35} color="black" />

                </TouchableOpacity>
            </View>

        </View>
    );
}

