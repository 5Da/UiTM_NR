import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Landlord = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{flext: 1, backgroundColor: 'green'}}>

                <View style={{flex: 1, backgroundColor: 'blue'}}>
                    <TouchableOpacity>
                    <Text>ADD NEW PROPERTY</Text>
                    <Text></Text>
                    </TouchableOpacity>
                
                </View>
                    <View>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                        <Text>EDIT</Text>
                    </View>
                    <View>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                        <Text>DELETE</Text>
                    </View>

            </View>
        </ScrollView>
    )
}

export default Landlord

const styles = StyleSheet.create({
    container: {

        // backgroundColor: 'black',
    },

})
