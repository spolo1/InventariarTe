import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,

  } from 'react-native';
import RoundButton from '../Components/RoundButton';
import BlankButton from '../Components/BlankButton';

const Register = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [correo,setCorreo]=useState('');
    return(
        <SafeAreaView style = {styles.RegisterContainer}>
                <Text style = {styles.Tittle}>Registro</Text>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        style = {styles.input}
                        placeholder='Nombre de usuario'
                        value={username}
                        onChangeText={setUsername}
                        keyboardType='default'
                    />
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        style = {styles.input}
                        placeholder='Correo'
                        value={correo}
                        onChangeText={setCorreo}
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
                <RoundButton
                text="Login"
                onPress={()=>{navigation.navigate('Login')}}/>
                <View style={{marginTop:'55%'}}>
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
export default Register;