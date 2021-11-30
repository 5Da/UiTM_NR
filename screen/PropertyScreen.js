import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'
import Landlord from '../component/Landlord'

const saved = true
const statusTenant = false

const PropertyScreen = () => {
    return (
        <SafeAreaView>

        <ScrollView style={styles.container}>
            <Header />
            {statusTenant ? <ListAccommodation saved ={saved}/> : <Landlord />}
        </ScrollView>
            <BottomTabs icons ={bottomTabIcons} />
        </SafeAreaView>

    )
}

export default PropertyScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
})
