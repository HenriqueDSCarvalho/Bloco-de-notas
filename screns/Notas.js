import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

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
                style={styles.TextInput}/>
            

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
        flex: 1,
        padding: 5,
        marginBottom: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    containerTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    containerleft: {
        flexDirection: 'row'
    },
    TextInput: {
        borderWidth: 1,
        textAlignVertical: 'bottom',
        padding: 4,
        height: '75%',        
        
    }

});
