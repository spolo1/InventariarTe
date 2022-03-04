import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
  } from 'react-native';
import BlankButton from '../Components/BlankButton';
import RoundButton from '../Components/RoundButton';
import InputText from '../Components/InputText';
const Login = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.LoginContainer}>
            <Image 
                style={styles.Icon} 
                source={require('../Images/Logo2.png')}/>
            <Text style = {styles.Tittle}>Bienvenido</Text>
            <InputText
                place='Email'
                type='email-address'/>
            <InputText
                place='Contraseña'/> 
            <View style={{marginLeft:'25%', marginBottom:'2%'}}>
                <BlankButton
                    text='¿Olvidaste tu clave?'
                    button='Recuperar'
                    onPress={()=>{navigation.navigate('Recover')}}/>  
                </View>
            <RoundButton
                text='Iniciar Sesión'
                onPress={()=>{navigation.navigate('Home')}}/>
                <View style={{marginTop:'35%'}}>
                    <BlankButton
                        text="¿No tienes cuenta?"
                        button="Registrate"
                        onPress={()=>{navigation.navigate('Register')}}/>
                </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    LoginContainer:{
        backgroundColor:"#FEF5DC",
        flex:1,
    },
    Tittle:{
        marginHorizontal:'30%',
        marginTop:'2%',
        fontSize:27,
        fontWeight: "bold",
        color:'#188209'
    },
    Icon:{
        marginHorizontal:'20%',
        marginTop:'25%',
        width:'55%',
        height:'30%',
    },
})
export default Login;
