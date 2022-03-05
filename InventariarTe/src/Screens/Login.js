import React, {useState} from 'react';
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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <SafeAreaView style = {styles.LoginContainer}>
            <View style = {styles.Part1}>
                <Image 
                    style={styles.Icon} 
                    source={require('../Images/Logo2.png')}/>
                <Text style = {styles.Tittle}>Bienvenido</Text>
            </View>
            <View>
                <InputText 
                    place='Correo electrónico'
                    type='email-address'
                    setText = {(username)=> setUsername (username)}/>
                <InputText 
                    place='Contraseña'
                    setText = {(password) => setPassword (password)}/>
            </View>
            <View>
                <BlankButton 
                    text = "¿Olvidaste tu cuenta?"
                    button = "Recuperar"
                    onPress = {()=> {navigation.navigate('Recover')}}/>
                <RoundButton
                    text = 'Iniciar sesión'
                    onPress = {()=>{navigation.navigate('Home')}}
                    /**onPress={()=>{navigation.navigate('Home')}}**//>
                <BlankButton
                    text = '¿No tienes cuenta?'
                    button = 'Registrate'
                    onPress={()=>{navigation.navigate('Register')}}/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    LoginContainer:{
        backgroundColor:"#FEF5DC",
        flexDirection:'column',
        flex:1,
    },
    Part1:{
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    Tittle:{
        fontSize:27,
        fontWeight: "bold",
        color:'#188209'
    },
    Icon:{
        width:'60%',
        height:'56%',
    },
})
export default Login;
