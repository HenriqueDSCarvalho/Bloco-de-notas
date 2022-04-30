import {View, Text, StyleSheet, Button} from 'react-native';


export default function Notas({ navigation }){
    return(
        <View>
            <Text>
                Notas
            </Text>
            <Button
            title='navigate'
            onPress={()=> navigation.navigate("Home")}
            />

        </View>
    );
}