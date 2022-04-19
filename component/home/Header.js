import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Filter from '../../screen/FilterScreen'

const Header = ({navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleOnClose = () => setIsModalVisible(false);

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
            <TouchableOpacity 
                onPress={() => setIsModalVisible(!isModalVisible)}
                style={{marginHorizontal: 6}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                    source={{uri: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-filter-interface-kiranshastry-lineal-kiranshastry.png', width: 30, height: 30}}
                    />
                <Text style={{marginRight: 4}}>Filter</Text>
                </View>
            </TouchableOpacity>
            <Filter visible={isModalVisible} onClose={handleOnClose}/>
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
        // backgroundColor: 'gray',
        alignItems: 'center',
        borderWidth: 1,
        margin: 4.5,
        borderRadius: 20,
    },
    search: {
        flex: 1,
        fontWeight: '600',
        borderRadius: 20,
        backgroundColor: 'white',
        paddingLeft: 10,
    },
})
