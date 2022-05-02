import {View, Text, StyleSheet, Button} from 'react-native';


export default function Notas({ navigation }){
    return(
        <View>
            <Button
            title='navigate'
            onPress={()=> navigation.navigate("Home")}
            />

        </View>
    );
}