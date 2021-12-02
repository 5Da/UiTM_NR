import React from 'react'
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'

const verificationStatus = true

const decision = () =>
Alert.alert(
  "Alert Title",
  "Are you sure you want to removed?",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ]
);


const ListAccommodation = ({saved}) => {
    return (
        <View style={styles.container}>
            <View>
            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                    />
                <View style={styles.buttonContainer} >
                {verificationStatus != false ? <Text style={styles.buttonVerification}>VERIFIED</Text> : null }
                </View>
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>
            {saved ? 
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', right: "2%", bottom: "2%"}}>
                <TouchableOpacity>
                    <Icon name="call" type="ionicons" style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="whatsapp" type="font-awesome" color= 'green' style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="minussquareo" type="antdesign" size={19} style={{marginRight:10}} onPress={decision}/>
                </TouchableOpacity>
            </View>
            : null}
            </View>
        
            <View>
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
            {saved ? 
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', right: "2%", bottom: "2%"}}>
                <TouchableOpacity>
                    <Icon name="call" type="ionicons" style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="whatsapp" type="font-awesome" color= 'green' style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="minussquareo" type="antdesign" size={19} style={{marginRight:10}} />
                </TouchableOpacity>
            </View>
            : null}
            </TouchableOpacity>
            </View>
            
            <View>
            <TouchableOpacity>
            <Divider style={{marginTop: 10}}/>
            <View style={styles.listItems}>
                <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/200/300',}}
                    />
                <View style={styles.buttonContainer} >
                {verificationStatus != false ? <Text style={styles.buttonVerification}>VERIFIED</Text> : null }
                </View>
                <View style={styles.itemDetails}>
                    <Text>Addreess</Text>
                    <Text>AccommodationType: Room/ Whole Unit</Text>
                    <Text>Furnish: No/ Partial/ Fully furnishing</Text>
                    <Text>Price: RM 500</Text>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            {saved ? 
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', position: 'absolute', right: "2%", bottom: "2%"}}>
                <TouchableOpacity>
                    <Icon name="call" type="ionicons" style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="whatsapp" type="font-awesome" color= 'green' style={{marginRight:10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="minussquareo" type="antdesign" size={19} style={{marginRight:10}} />
                </TouchableOpacity>
            </View>
            : null}
            </TouchableOpacity>
            </View>
            
            {/* <TouchableOpacity>
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
            </TouchableOpacity> */}
        <Divider style={{marginTop: 10, marginBottom: 200}}/>
        </View>
    )
}

export default ListAccommodation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
    },
    listItems: {
        marginTop: 12,
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    image: {
        width: 150, 
        height: 150,
    },
    buttonContainer: {
        position: 'absolute',
        left: 6,
        backgroundColor : '#0096F6',
        marginTop: 10,
    },

    buttonVerification: {
        margin: 5,
        width: 60,
        fontSize: 13,
        minHeight: 18,
        color: 'white'
    },
    itemDetails: {
        flex: 1,
        paddingLeft: 10,
    },
})
