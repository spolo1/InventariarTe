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
import InputText from '../Components/InputText';
const Register = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [correo,setCorreo]=useState('');
    return(
        <SafeAreaView style = {styles.RegisterContainer}>
            <View style = {styles.Part1}>
                <Text style = {styles.Tittle}>Registro</Text>
            </View>
            <View>
                <InputText
                    place = "Nombre de usuario"
                    style= "default"
                    onChangeText = {(username) => setUsername (username)}/>
                <InputText
                    place = "Correo electrónico"
                    style = "email-address"
                    onChangeText = {(correo) => setCorreo (correo)}/>
                <InputText
                    place = "Contraseña"
                    onChangeText = {(password) => setPassword (password)}/>
                <RoundButton
                    text = "Crear usuario"
                    onPress = {()=> {navigation.navigate('Login')}}/>
            </View>
            <View>
                
                <BlankButton
                    text = "¿Ya tienes cuenta?"
                    button = "Iniciar sesión"
                    onPress = {()=>{navigation.navigate('Login')}}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    RegisterContainer:{
        backgroundColor:"#FEF5DC",
        flex:1,
        justifyContent:'space-evenly',
    },
    Part1:{
        alignItems:'center',
    },
    Tittle:{
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