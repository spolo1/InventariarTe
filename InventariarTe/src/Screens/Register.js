import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
  } from 'react-native';
import RoundButton from '../Components/RoundButton';

const Register = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.RegisterContainer}>
            <RoundButton
            text="Register"
            onPress={()=>{navigation.navigate('Login')}}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    RegisterContainer:{
        backgroundColor:"#FEF5DC",
        flex:1,
    },
})
export default Register;