import React from 'react'
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'

const HomeScreen = ({navigation, route}) => {
    // console.log(route)
    return (

        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView style={{flex: 1}}>
                <ListAccommodation navigation={navigation} userType={route.params.userType}/>
            </ScrollView>
            <BottomTabs icons ={bottomTabIcons} navigation={navigation}/>
            <View></View>
        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? 25 : 0
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: 'white',
        // margin: 5,
    },
})
