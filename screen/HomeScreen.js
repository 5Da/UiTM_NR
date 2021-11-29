import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'

const HomeScreen = () => {
    return (

        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <ListAccommodation />
            </ScrollView>
            <BottomTabs icons ={bottomTabIcons} />
            <View></View>
        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
        // margin: 5,
    },
})
