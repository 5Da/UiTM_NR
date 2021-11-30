import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider, Button, Icon} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';

const verificationStatus ='true'

const ADetailsScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/1000/1300',}}
                />
    
            <View style={styles.buttonContainer}>
                {verificationStatus != 'false' ? <Button title='Verified' style={styles.buttonVerification}/> : null }
            </View>

            <View style={styles.container}>
                <Text style={{fontWeight: 'bold',  fontSize: 25}}>RM2000</Text>
                
                <Image
                    style={styles.icon} 
                    source={{uri: 'https://img.icons8.com/color/2x/male-female-user-group.png'}}
                />
                <Divider />
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Whole Unit</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Title</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Vista Alam</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Furnishing</Text>
                <Text>Partial furnish </Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Addreess</Text>
                <Text>Menara Olympia, No. 8, Jalan Raja Chulan, 50200, Kuala Lumpur</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Features</Text>
                <Text>-Fridge </Text>
                <Text>-Wifi </Text>
                <Text>-Washer </Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Faciilities</Text>
                <Text>-Swimming </Text>
                <Text>-Security </Text>
                <Text>-Gym </Text>
                <Text>-Playground </Text>
            </View>
            <Divider />

            {/* <View style={styles.contentContainer}>
                <Text>Listing Description</Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
            </View>
            <Divider />
            <View style={styles.contentContainer}>
                <Text>Listing Description</Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
            </View>
            <Divider />
            <View style={styles.contentContainer}>
                <Text>Listing Description</Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
            </View>
            <Divider />
            <View style={styles.contentContainer}>
                <Text>Listing Description</Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
            </View>
            <Divider /> */}

        </ScrollView>
        <View style={styles.bottomWrapper}>
            <Divider width={1} orientation= 'vertical' style={{marginBottom: 10}}/>
            <View style={styles.methodChoosen}>    
                <Text />
                <Text />
                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button 
                    icon={
                        <Icon name="call" type="ionsicon" size={24} color="black"/>
                    }
                    title='Call' />
                </View>

                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button  
                    icon={
                        <FontAwesome name="whatsapp" size={24} color="black" />
                    }
                    title='WhatsApp' />
                </View>

                <View style={{borderRadius: 10, overflow: 'hidden'}}>
                <Button 
                    icon={
                        <Icon name="add-circle-outline" type="ionsicon" size={24} color="black"/>
                    }
                    title='Saved' 
                />
                </View>
                <Text />
                <Text />
            </View>
        </View>
        </SafeAreaView>
    )
}

export default ADetailsScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft:10, 
        paddingTop: 10,
    },
    image: { 
        width: '100%',
        height: 250,

    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'absolute',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        // width: 25,
        // height: 18,
        // left: '5%',
        right: '2%',
        top: 230,
    },

    buttonVerification: {
        zIndex: 999,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 4,
    },
    contentContainer: {
        paddingLeft: 10,
        marginTop: 12,
    },
    bold: {
        fontWeight: 'bold',
    },
    bottomWrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
    },
    methodChoosen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        minHeight: 50,
        backgroundColor: 'white'
    },
})
