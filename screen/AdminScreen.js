import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

const AdminScreen = ({navigation}) => {
    return (
        <SafeAreaView style ={styles.container}>

        <View>
            <Text>Admin page</Text>
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
