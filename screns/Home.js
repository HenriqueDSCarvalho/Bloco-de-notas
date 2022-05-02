import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';


export default function Home({ navigation }) {
    return (
        <View>
            <Button
                title='navigate'
                onPress={() => navigation.navigate("Notas")}
            />

            <AntDesign name="addfile" size={24} color="black" />



        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }

});