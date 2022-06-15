import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
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
