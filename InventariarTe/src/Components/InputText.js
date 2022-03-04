import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';

const InputText = (props) => {
    const [text, setText] = useState('')
    const {place, type} = props
    return(
        <View style = {styles.inputContainer}>
            <TextInput 
                style = {styles.input}
                placeholder={place}
                value={text}
                onChangeText={setText}
                keyboardType={type}
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
