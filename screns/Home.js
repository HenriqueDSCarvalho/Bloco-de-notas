import {View, Text, StyleSheet, Button} from 'react-native';


export default function Home({ navigation }){
    return(
        <View>
            <Text>
                Home
            </Text>
            <Button
            title='navigate'
            onPress={()=> navigation.navigate("Notas")}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }

});