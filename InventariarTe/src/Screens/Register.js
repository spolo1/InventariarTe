import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    
  } from 'react-native';
import RoundButton from '../Components/RoundButton';
import InputText from '../Components/InputText';
import BlankButton from '../Components/BlankButton';

const Register = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.RegisterContainer}>
                <Text style = {styles.Tittle}>Registro</Text>
                <View style={{marginTop:'35%'}}>
                    <InputText
                        place='Email'
                        type='email-address'/>
                    <InputText
                        place='Contraseña'/> 
                </View>
                <RoundButton
                text="Login"
                onPress={()=>{navigation.navigate('Login')}}/>
                <View style={{marginTop:'70%'}}>
                    <BlankButton
                        text='¿Ya tienes cuenta?'
                        button='Iniciar Sesión'
                        onPress={()=>{navigation.navigate('Login')}}/>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    RegisterContainer:{
        backgroundColor:"#FEF5DC",
        flex:1,
    },
    Tittle:{
        marginHorizontal:'36%',
        marginTop:'20%',
        fontSize:28,
        fontWeight: "bold",
        color:'#188209',
        marginBottom:'3%',
    },
})
export default Register;