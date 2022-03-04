import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
  } from 'react-native';
import BlankButton from '../Components/BlankButton';
import RoundButton from '../Components/RoundButton';
const Login = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <SafeAreaView style = {styles.LoginContainer}>
            <Image 
                style={styles.Icon} 
                source={require('../Images/Logo2.png')}/>
            <Text style = {styles.Tittle}>Bienvenido</Text>
            <View style = {styles.inputContainer}>
                    <TextInput 
                        style = {styles.input}
                        placeholder='Nombre de usuario'
                        value={username}
                        onChangeText={setUsername}
                        keyboardType='email-address'
                    />
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        style = {styles.input}
                        placeholder='Contraseña'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
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
    input:{
        marginHorizontal:'3%'
    },
    inputContainer:{
        borderRadius:5,
        marginHorizontal:'8%',
        marginBottom:'3%',
        backgroundColor:'#E0DEDE'
    },
})
export default Login;
