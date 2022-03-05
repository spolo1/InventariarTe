import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';

const InputText = (props) => {
    const {place, type,value, setText} = props
    return(
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input}
                placeholder={place}
                keyboardType={type}
                onChangeText = {setText}
                value = {value}
                placeholderTextColor="#188209"
                secureTextEntry={true}/>
        </View>
    )
};
const styles = StyleSheet.create({
    inputContainer:{
        borderRadius:5,
        marginHorizontal:'8%',
        marginBottom:'3%',
        backgroundColor:'#E0DEDE'
    },
    input:{
        marginHorizontal:'3%'
    }
})
export default InputText;
