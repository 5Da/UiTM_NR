import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/2x/ffffff/home.png',
        inactive: 'https://img.icons8.com/ios-glyphs/2x/ffffff/home.png',
    },
    {
        name: 'Property',
        active: 'https://img.icons8.com/ios-filled/2x/ffffff/add.png',
        inactive: 'https://img.icons8.com/ios-glyphs/2x/ffffff/add.png',
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/ios-filled/2x/ffffff/guest-male.png',
        inactive : 'https://img.icons8.com/ios-glyphs/2x/ffffff/guest-male.png',
    },
]



    
const BottomTabs = ({navigation, icons}) => {
    const [activeTab, setActiveTab] = useState('Home')
    
    const Icon = ({icon, index}) => (
        
        <TouchableOpacity 
        onPress={() =>  (
            setActiveTab(icon.name),
            navigation.navigate(icon.name) )
            } 
        >

            <Image key={index}
                source= {{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
                style={
                    styles.icon
                }
                />
        <View><Text style={{color: 'white'}}>{icon.name}</Text></View>
        </TouchableOpacity>
    )
    
    return (
        
        <View style={styles.wrapper}>
            <Divider width={1} orientation= 'vertical' />
            <View style={styles.container} >
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                    ))}
            </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 15,
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#16324F',
        minHeight: 65,
    },
    
    container: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        marginTop: 1,
        width: 32,
        height: 30,
        paddingLeft: 25,
    },
})