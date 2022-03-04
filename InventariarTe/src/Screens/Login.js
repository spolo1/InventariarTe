import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
  } from 'react-native';
import BlankButton from '../Components/BlankButton';

const Login = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.LoginContainer}>
            <BlankButton
            text="Login"
            button="Register"
            onPress={()=>{navigation.navigate('Register')}}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    LoginContainer:{
        backgroundColor:"#FEF5DC",
        flex:1,
    },
})
export default Login;
