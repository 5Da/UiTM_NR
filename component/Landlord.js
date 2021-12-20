import React, { useState } from 'react'
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Divider, Icon, ListItem } from 'react-native-elements'
import { SpeedDial } from 'react-native-elements'
import AddPropertyModal from './AddPropertyModal'

const verificationStatus = true

const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height


const Landlord = ({navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleOnClose = () => setIsModalVisible(false);
    // const [open, setOpen] = React.useState(false)
    return (
        <ScrollView >
            <View>
            
                <View style={{backgroundColor: '#465362'}}>
                    <TouchableOpacity 
                        style={styles.addProperties}
                        onPress={() => setIsModalVisible(true)}
                    >
                    <Text style={styles.addContent}>ADD NEW PROPERTY</Text>
                    <Image source= {{uri: 'https://img.icons8.com/ios-glyphs/2x/ffffff/add.png'}} style={styles.addIconContent}/>
                    {/* <Icon name='pluscircleo' type='antdesign' style={styles.addIconContent}/> */}
                    <Text></Text>
                    </TouchableOpacity>
                </View>

                <AddPropertyModal 
                    visible={isModalVisible}
                    onClose={handleOnClose}
                />

                    {/* <Icon name='pluscircleo' type='antdesign' /> */}
                <View style={styles.textContainer}>
                    <Text style={{fontSize: 30}}> List of Properties </Text>
                </View>

                <View style={styles.propertyList} >
                    <ListItem.Swipeable 
                    leftContent={ 
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: '25%', backgroundColor: '#CCE3DE'}}>
                    <Button 
                    title="Info"
                    icon={{ name: 'info', color: 'white' }}
                    buttonStyle={{ minHeight: '55%' }}
                    />
                    </View>
                    }
                    rightContent={
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#CCE3DE', top: '25%'}}>
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
                        {/* ///////////////////////////////hereeeee///////////////////////// */}
                            <TouchableOpacity style={styles.listPropertyContainer} onPress={() => navigation.navigate('ADetails')}>
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

                {/* <View style={styles.propertyList}>
                    <ListItem.Swipeable 
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
                    <ListItem.Swipeable 
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
                </View> */}
                {/* <View style={styles.propertyList}>
                    <ListItem.Swipeable 
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
                </View> */}
            </View>
                {/* <SpeedDial 
                style={{bottom: '10%'}}
                color= {'blue'}
                isOpen={open}
                icon={{ name: 'plus', type: 'feather', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                >
                <SpeedDial.Action
                    color= {'blue'}
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add new agreement"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    color= {'blue'}
                    icon={{ name: 'edit', color: '#fff' }}
                    title="Edit Agreement"
                    onPress={() => console.log('Edit Something')}
                />
                </SpeedDial> */}
        </ScrollView>
    )
}

export default Landlord

const styles = StyleSheet.create({
    addProperties: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor : '#16324F',
        width: 200,
        borderRadius : 20,
    },
    addContent: {
        margin: 5,
        padding: 7,
        paddingLeft: 10,
        color: 'white'
    },
    addIconContent: {
        marginTop: 11,
        width: 20, 
        height:23
        
    },
    textContainer: {
        marginTop: 6,
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
