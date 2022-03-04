import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Recover from '../Screens/Recover';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();
const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
                <Stack.Screen
                    name='Recover'
                    component={Recover}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
