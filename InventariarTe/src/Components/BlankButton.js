import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

const BlankButton = (props) => {
    const {text, button, onPress} = props
    return(
        <View style = {styles.BlankContainer}>
            <Text style = {{marginHorizontal:'3%', fontSize:15}}>{text}</Text>
            <TouchableOpacity onPress = {onPress}>
                <Text style = {{color:'#188209', fontSize:15}}>{button}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    BlankContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:'3%',
    }
})
export default BlankButton;
