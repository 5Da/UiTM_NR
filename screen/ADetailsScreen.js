import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider, Button, Icon} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import Swiper from '../component/Swiper';
export const data = [
    // 'https://i0.wp.com/tokusatsunetwork.com/wp-content/uploads/2020/01/622207C2-66FC-4E40-8ACE-93451C2B692F.jpeg?resize=500%2C500',
    // 'https://i1.sndcdn.com/artworks-nTBzTVq3mDNiozoc-sJRrSA-t500x500.jpg',
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuOSRAQwUl81m6VATDRI9uxRKarwZWEx1tg&usqp=CAU',
    // 'https://static.myfigurecollection.net/pics/figure/large/849650.jpg?rev=1559580141',
    'https://picsum.photos/500/490',
    'https://picsum.photos/500/520',
    'https://picsum.photos/500/500',
    'https://picsum.photos/500/510',
    'https://picsum.photos/500/480',
 ]
const verificationStatus ='true'

const ADetailsScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            <Swiper data={data}/>    
            {/* <Image 
                    style={styles.image}
                    source={{uri : 'https://picsum.photos/1000/1300',}}
                /> */}
    
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
                <Text>Whole Unit / Room Rental</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Listing Title</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Vista Alam</Text>
            </View>
            <Divider />

            <View style={styles.contentContainer}>
                <Text>Property Type</Text>
                <Text>Apartment/ Condo/ Bungalow </Text>
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
            <Divider />
            <View style={styles.contentContainer}>
                <Text>Listing Description</Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
                <Text>-asdasdasdasdsadsa </Text>
            </View>
            <Divider />

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
