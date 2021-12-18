import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height

const SimpleModal = (onClose) => {
    return (
        
        <View>
            
            <Text style={{fontSize: 20}}> Sample Title Modal </Text>
        
            <TouchableOpacity
            onPress={onClose()}
            >
            <Text> Close Modal</Text>
        </TouchableOpacity>
            
        </View>
    )
}

export default SimpleModal

const styles = StyleSheet.create({})
