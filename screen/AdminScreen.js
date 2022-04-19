import React from 'react'
import { StatusBar, StyleSheet} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../component/admin/Dashboard/Dashboard';
import CustomDrawer from '../component/admin/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Tenant from '../component/admin/Tenant';
import Landlord from '../component/admin/Landlord';
import AdminList from '../component/admin/Admin';
import SettingsScreen from '../component/admin/SettingsScreen';
import ListAccommodation from '../component/admin/ListAccommodation';

const Drawer = createDrawerNavigator();


const AdminScreen = () => {
    
    return (
        <Drawer.Navigator 
        initialRouteName='Dashboard'
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tenant"
        component={Tenant}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Landlord"
        component={Landlord}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Accommodations"
        component={ListAccommodation}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="house-user" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Admin List"
        component={AdminList}
        options={{
          drawerIcon: ({color}) => (
            <Fontisto name="person" size={24} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      /> 
    </Drawer.Navigator>
    )
}

export default AdminScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
      
      },

})
