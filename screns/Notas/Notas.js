import { View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import styles from './NotasStyle';

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


            <TextInput
                multiline
                style={styles.TextInput} />


            <View style={styles.containerBottom}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                >
                    <Ionicons name="home" size={35} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign name="save" size={35} color="black" />
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

