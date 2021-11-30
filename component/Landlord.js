import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Divider, Icon, ListItem } from 'react-native-elements'

const verificationStatus = true

const Landlord = () => {
    return (
        <ScrollView style={{flex: 1}} >
            <View style={{flex: 1}}>
            
                <View style={{backgroundColor: 'gray'}}>
                    <TouchableOpacity style={styles.addProperties}>
                    <Text style={styles.addContent}>ADD NEW PROPERTY</Text>
                    <Icon name='pluscircleo' type='antdesign' style={styles.addIconContent}/>
                    <Text></Text>
                    </TouchableOpacity>
                </View>

                    {/* <Icon name='pluscircleo' type='antdesign' /> */}
                <View style={styles.textContainer}>
                    <Text style={{fontSize: 30}}> List of Properties </Text>
                </View>

                <View style={styles.propertyList}>
                    <ListItem.Swipeable style={{}}
                    leftContent={ 
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: '25%', backgroundColor: 'pink'}}>
                    <Button 
                    title="Info"
                    icon={{ name: 'info', color: 'white' }}
                    buttonStyle={{ minHeight: '55%' }}
                    />
                    </View>
                    }
                    rightContent={
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', top: '25%'}}>
                    <Button 
                        // title="Edit"
                        icon={{ name: 'edit', color: 'white' }}
                        buttonStyle={{ minHeight: '55%', backgroundColor: 'blue', marginRight: 7}} />
                    <Button 
                        // title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '55%', backgroundColor: 'red', marginLeft: 7}} />
                    
                    </View>
                    }
                    >
                    <ListItem.Content style={styles.listPropertyContainer}>
                            <TouchableOpacity style={styles.listPropertyContainer}>
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
                    </ListItem.Content>
                    <ListItem.Chevron />
                    </ListItem.Swipeable>
                </View>

                <View style={styles.propertyList}>
                    <ListItem.Swipeable style={{}}
                    leftContent={ 
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: '25%', backgroundColor: 'pink'}}>
                    <Button 
                    title="Info"
                    icon={{ name: 'info', color: 'white' }}
                    buttonStyle={{ minHeight: '55%' }}
                    />
                    </View>
                    }
                    rightContent={
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', top: '25%'}}>
                    <Button 
                        // title="Edit"
                        icon={{ name: 'edit', color: 'white' }}
                        buttonStyle={{ minHeight: '55%', backgroundColor: 'blue', marginRight: 7}} />
                    <Button 
                        // title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '55%', backgroundColor: 'red', marginLeft: 7}} />
                    
                    </View>
                    }
                    >
                    <ListItem.Content style={styles.listPropertyContainer}>
                            <TouchableOpacity style={styles.listPropertyContainer}>
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
                    </ListItem.Content>
                    <ListItem.Chevron />
                    </ListItem.Swipeable>
                </View>


            </View>
        </ScrollView>
    )
}

export default Landlord

const styles = StyleSheet.create({
    addProperties: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor : 'blue',
        width: 200,
        borderRadius : 20,
    },
    addContent: {
        margin: 5,
        padding: 7,
    },
    addIconContent: {
        marginTop: 10,
        
    },
    textContainer: {
        // marginTop: 10,
        borderWidth: 0.5,
        alignItems: 'center',
        fontWeight: '800',
        minHeight: 20,
        backgroundColor: 'white'
    },
    propertyList: {
        flex: 1,
        backgroundColor: 'white', 
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        // alignItems: 'center', kiv
        minHeight: '15%',
    },
    listPropertyContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'yellow',
    },

    listItems: {
        flexDirection: 'row',
        // backgroundColor: 'purple',
        width: '70%', 
        height: '100%',
    },
    image: {
        width: 150, 
        height: 125,
        resizeMode: 'cover',
        // zIndex: 50,
    },
    buttonContainer: {
        position: 'absolute',
        left: -8,
        backgroundColor : '#0096F6',
        marginTop: 10,
        paddingLeft: 3,
    },
    buttonVerification: {
        margin: 3,
        width: 60,
        fontSize: 13,
        minHeight: 18,
        color: 'white',
    },
    itemDetails: {
        // flex: 1,
        paddingLeft: 10,
        width: '75%',
        height: '100%',
    },
})
