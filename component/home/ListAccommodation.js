import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'

const ListAccommodation = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                />
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                />
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                />
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                />
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                />
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>

        </View>
    )
}

export default ListAccommodation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItems: {
        marginTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    image: {
        width: 150, 
        height: 150,
    },
    itemDetails: {
        flex: 1,
        paddingLeft: 10,
    },
})
