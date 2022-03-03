import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BlankButton from './src/Components/BlankButton';
import InputText from './src/Components/InputText';
import RoundButton from './src/Components/RoundButton'
const App= () => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar backgroundColor="#28302D"/>
      <RoundButton 
        text = 'iniciar sesion'
        onPress ={()=>{alert('Iniciar Sesión')}}/>
      <BlankButton
        text="¿No tienes cuenta?"
        button = "Registrate"
        onPress = {()=>{alert('registrarse')}}
        />
      <InputText
          place={'Email'}
          type={'numeric'}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FEF5DC",
    flex:1,
  }
});

export default App;
