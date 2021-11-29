import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}> 
            <TouchableOpacity style={{marginHorizontal: 6}}>
                <Image 
                    source={{uri: 'https://img.icons8.com/ios/2x/search.png', width: 30, height: 30}}
                    />
            </TouchableOpacity>
            <View style={styles.search}>
                <TextInput placeholder='Search' placeholderTextColor='gray'></TextInput>
            </View>
            <TouchableOpacity style={{marginHorizontal: 6}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    source={{uri: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-filter-interface-kiranshastry-lineal-kiranshastry.png', width: 30, height: 30}}
                    />
                <Text>Filter</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12,
        // backgroundColor: '#3461eb',
        alignItems: 'center',
        borderWidth: 1,
        margin: 5,
    },
    search: {
        flex: 1,
        fontWeight: '600',
        borderRadius: 20,
        backgroundColor: 'white',
    },
})
