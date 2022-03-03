import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';

const RoundButton = (props) => {
    const {text,onPress} = props
    return(
        <TouchableOpacity 
            style = {styles.buttonContainer}
            onPress = {onPress}>
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom:'3%',
        backgroundColor:'#188209',
        marginHorizontal:'8%',
        paddingVertical:'3%',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#FFFFFF',
        /**temporal tamaño letra */
        fontSize:18
    },
})
export default RoundButton;