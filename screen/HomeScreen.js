import React from 'react'
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'

export const data3 = [
    // 'https://i0.wp.com/tokusatsunetwork.com/wp-content/uploads/2020/01/622207C2-66FC-4E40-8ACE-93451C2B692F.jpeg?resize=500%2C500',
    // 'https://i1.sndcdn.com/artworks-nTBzTVq3mDNiozoc-sJRrSA-t500x500.jpg',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuOSRAQwUl81m6VATDRI9uxRKarwZWEx1tg&usqp=CAU',
    // 'https://static.myfigurecollection.net/pics/figure/large/849650.jpg?rev=1559580141',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
 ]
const HomeScreen = ({navigation}) => {
    
    return (

        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={{flex: 1}}>
                <ListAccommodation navigation={navigation}/>
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
