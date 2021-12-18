import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';
import ProfileScreen from './screen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ADetailsScreen from './screen/ADetailsScreen';
import LoginScreen from './screen/LoginScreen';
import firebase from "firebase/app";
import "firebase/firestore";
// import TestScreen from './screen/TestScreen';
// import Test2 from './screen/swipableItem';
// import ListAccommodation from './component/home/ListAccommodation';
// import Edit from './component/edit';

const AuthStack = createStackNavigator()
const UserStack = createStackNavigator()
// const statusTenant = true
const UserScreen = () => (
    <UserStack.Navigator>
        <UserStack.Screen name='Home' component= {HomeScreen}/>  
        <UserStack.Screen name='Property' component= {PropertyScreen}/>  
        <UserStack.Screen name='Profile' component= {ProfileScreen} />  
        <UserStack.Screen name='ADetails' component= {ADetailsScreen} />  
    </UserStack.Navigator>
)

const AuthScreen = () => (
    <AuthStack.Navigator        >
        <AuthStack.Screen name='Login' component= {LoginScreen} />  
    </AuthStack.Navigator>
)
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (firebase.auth().currentUser) {
        setIsAuthenticated(true);
    }
    firebase.auth().onAuthStateChanged((user) => {
        console.log("Checking auth state...");
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    });
}, []);
  //console.log(require("./assets/icon.png"));
  return (
      <NavigationContainer>
         {isAuthenticated ? <UserScreen /> : <AuthScreen />}   
      </NavigationContainer>
    // <Edit />
    // <HomeScreen/>
    // <PropertyScreen />
    // <ProfileScreen />
    // <ADetailsScreen />
    // <ListAccommodation />
    // <LoginScreen />

      // <TestScreen />
      // <Test2/>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
