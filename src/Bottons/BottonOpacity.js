import { TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function BottonOpacity({ navigation }) {
    return (
        <View>
            <TouchableOpacity >
                <SimpleLineIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}