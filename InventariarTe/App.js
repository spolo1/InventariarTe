import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Routes from './src/Navigation/Routes';
const App= () => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar backgroundColor="#28302D"/>
        <Routes/>
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
