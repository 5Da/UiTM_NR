import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';
import ProfileScreen from './screen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ADetailsScreen from './screen/ADetailsScreen';
import LoginScreen from './screen/LoginScreen';
import AdminScreen from './screen/AdminScreen';
import firebase from "firebase/app";
// import "firebase/firestore";
import Landlord from './component/Landlord';
import ImagePicker2 from './component/ImagePicker2';
import RegisterScreen from './screen/RegisterScreen';
import { db } from './firebase';
// import TestScreen from './screen/TestScreen';
// import Test2 from './screen/swipableItem';
// import ListAccommodation from './component/home/ListAccommodation';
// import Edit from './component/edit';

const AuthStack = createStackNavigator()
const UserStack = createStackNavigator()
const AdminStack = createStackNavigator()
// const statusTenant = true
const AuthScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component= {LoginScreen} />  
        <AuthStack.Screen name='Register' component= {RegisterScreen} />  
    </AuthStack.Navigator>
)

const UserScreen = ({userType}) => (
    <UserStack.Navigator>
        <UserStack.Screen name='Home' component= {HomeScreen}/>  
        <UserStack.Screen name='Property' component= {PropertyScreen} initialParams={{userType: userType}}/>  
        <UserStack.Screen name='Profile' component= {ProfileScreen} />  
        <UserStack.Screen name='ADetails' component= {ADetailsScreen} />  
    </UserStack.Navigator>
)

const AdminScreens = () => (
    <AdminStack.Navigator>
      <AdminStack.Screen name='Admin' component= {AdminScreen} />  
    </AdminStack.Navigator>
)

// const CheckUser = ({isAuthenticated, userType}) => {

//   if(userType === 'Admin'){
//     {isAuthenticated ? <AdminScreens /> : <AuthScreen />}
//   }
//   else if(userType === 'Tenant'){
//     {isAuthenticated ? <UserScreen /> : <AuthScreen />}
//   }

// }

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  

  useEffect(() => {
    if (firebase.auth().currentUser) {
        setIsAuthenticated(true);
      }
      firebase.auth().onAuthStateChanged((user) => {
        console.log("Checking auth state...");
        
        // if(test.data() === 'Admin'){
        //   console.log('test' + test.data() )
        // }


        if (user) {
            setIsAuthenticated(true);
            const docRef = db.collection('users').doc(user.uid)
            console.log(docRef) // test
            docRef.get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data().role);
                  setUserType(doc.data().role)
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
        } else {
            setIsAuthenticated(false);
        }
    });
}, []);
  //console.log(require("./assets/icon.png"));
  return (
      <NavigationContainer>
        { 

          isAuthenticated && userType === 'Tenant' ? <UserScreen userType={userType}/> : isAuthenticated && userType === 'Landlord' ? <UserScreen userType={userType}/> : isAuthenticated && userType === 'Admin' ? <AdminScreens/> : <AuthScreen /> 
          // isAuthenticated && userType === 'Tenant' ? <UserScreen /> : <AdminScreens />
        }   
         {/* <ImagePicker2 /> */}
         {/* <Landlord/> */}
      </NavigationContainer>
      // <NavigationContainer>
      //       <AdminScreens />
      // </NavigationContainer>
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
