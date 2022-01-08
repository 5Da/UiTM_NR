import React from 'react'
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { auth } from "../firebase";




const AdminScreen = ({navigation}) => {
    
    const signOutUser = () => {
      
        // change authenthication state
        auth.signOut().then( () => {
            navigation.replace("Login")
        })
    }
    return (
        <SafeAreaView style ={styles.container}>

        <View>
            <Text>Admin page</Text>
            <Button title='Log Out' onPress={signOutUser}/>
        </View>

        </SafeAreaView>
    )
}

export default AdminScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
      
      },

})
