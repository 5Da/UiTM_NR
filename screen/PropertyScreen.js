import React from 'react'
import { ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'
import Landlord from '../component/Landlord'

const saved = true
const statusTenant = false
const image = { uri : 'https://vectorseek.com/wp-content/uploads/2021/02/UiTM-Logo-Vector.jpg'}

const PropertyScreen = () => {
    return (
        <ImageBackground source={image}  style={styles.image} >
        <SafeAreaView style={{flex: 1}}>
                <ScrollView style={styles.container}>
                    <Header />
                    {statusTenant ? <ListAccommodation saved ={saved}/> : <Landlord />}
                </ScrollView>
                <BottomTabs icons ={bottomTabIcons} />
        </SafeAreaView>
        </ImageBackground>    

    )
}

export default PropertyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        // margin: 20,
    },
})
