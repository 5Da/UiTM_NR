import React, { useEffect, useState } from 'react';
import HomeScreen from './screen/HomeScreen';
import PropertyScreen from './screen/PropertyScreen';
import ProfileScreen from './screen/ProfileScreen';
import ADetailsScreen from './screen/ADetailsScreen';
import AdminScreen from './screen/AdminScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import { db, auth } from './firebase';
import { Platform } from 'react-native';
import FilterScreen from './screen/FilterScreen';
import EditProfileScreen from './screen/EditProfileScreen';
import NotificationScreen from './screen/NotificationScreen';
import SupportScreen from './screen/SupportScreen';
import AboutUsScreen from './screen/AboutUsScreen';

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
    <UserStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      headerShown: Platform.OS === "web" ? true : false,
    }}>
        <UserStack.Screen name='Home' component= {HomeScreen} initialParams={{userType: userType}}/>  
        <UserStack.Screen name='Property' component= {PropertyScreen} initialParams={{userType: userType}}/>  
        <UserStack.Screen name='Profile' component= {ProfileScreen} />  
        <UserStack.Screen name='ADetails' component= {ADetailsScreen} />  
        <UserStack.Screen name='Filter' component= {FilterScreen} />  
        <UserStack.Screen name='Edit Profile' component= {EditProfileScreen} />  
        <UserStack.Screen name='Notification' component= {NotificationScreen} />  
        <UserStack.Screen name='Support' component= {SupportScreen} />  
        <UserStack.Screen name='About Us' component= {AboutUsScreen} />  
    </UserStack.Navigator>
)

const AdminScreens = () => (
    <AdminStack.Navigator>
      <AdminStack.Screen name='Admin' component= {AdminScreen} />  
    </AdminStack.Navigator>
)


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  

  useEffect(() => {
    if (auth.currentUser) {
        setIsAuthenticated(true);
      }
      auth.onAuthStateChanged((user) => {
        console.log("Checking auth state...");
      
        if (user) {
            setIsAuthenticated(true);
            const docRef = db.collection('users').doc(user.uid)
            // console.log(docRef) // test
            docRef.get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data().role);
                  setUserType(doc.data().role)
                  // setPhoneNp(doc.data().phoneNo)
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
  return (
      <NavigationContainer>
        { 
          isAuthenticated && userType === 'Tenant' ? <UserScreen userType={userType}/> : isAuthenticated && userType === 'Landlord' ? <UserScreen userType={userType}/> : isAuthenticated && userType === 'Admin' ? <AdminScreens/> : <AuthScreen /> 
        }   
      </NavigationContainer>
  );
}
