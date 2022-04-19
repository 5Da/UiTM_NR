import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-elements';

const width = Dimensions.get("window").width
const CardForUsers = ({tenantC, landlordC, adminC, registeredAccNum, verifiedNum }) => {
    // const [tenant, setTenant] = useState(tenantC)
    // const [landlord, setLandlord] = useState(landlordC)
    // const [admin, setAdmin] = useState(adminC)
    // const [totaluser, setTotaluser] = useState(tenant+landlord+admin)

    // const [verification, setVerification] = useState(verifiedNum)
    // const [registerRental, setRegisterRental] = useState(registeredAccNum)
    const [rentalAgreement, setRentalAggreement] = useState(20)
    // const [totaluser, setTotaluser] = useState()
    let totaluser = tenantC + landlordC + adminC
    // let tenantPercentage = tenantC/(tenantC+landlordC+adminC) * 100
    // console.log(totalUser)
    return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center',flexDirection: 'row' ,backgroundColor: '#320A28'}}>
        <ScrollView horizontal={true} style={{backgroundColor: 'white', marginTop: 5, width: width}}>
            {/* landlord n tenant card */}
            <View style={{marginBottom: 10, paddingLeft: 10}}>
                <Card containerStyle={{ marginTop: 15 }}>
                {/* <Card.Title>FONTS</Card.Title> */}
                {/* <Card.Divider /> */}
                <Text style={{fontSize:14, fontWeight: '600', paddingLeft:10}}>{tenantC}</Text>
                <Text>Tenants</Text>
                <AnimatedCircularProgress
                size={150}
                width={13}
                fill={tenantC}
                duration={2000}
                tintColor="#0a23a3"
                backgroundColor="#E0DFD5" >
                {
                    (tenantC) => (
                    <Text>
                        { tenantC  } <Ionicons name="person-outline" size={22} color={'blue'}  />
                    </Text>
                    )
                }
                </AnimatedCircularProgress>
                </Card>

                <Card containerStyle={{ marginTop: 15 }}>
                {/* <Card.Title>FONTS</Card.Title> */}
                {/* <Card.Divider /> */}
                <Text style={{fontSize:14, fontWeight: '600', paddingLeft:10}}>{landlordC}</Text>
                <Text>Landlords</Text>
                <AnimatedCircularProgress
                size={150}
                width={13}
                fill={landlordC}
                duration={2000}
                tintColor="green"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#E0DFD5" >
                {
                    (landlord) => (
                    <Text>
                        { Math.round(landlord)  } <Ionicons name="person" size={22} color={'green'} />
                    </Text>
                    )
                }
                </AnimatedCircularProgress>
                </Card>

            </View>

                {/* total use n admin */}
            <View style={{marginBottom: 10}}>
                <Card containerStyle={{ marginTop: 15 }}>
                {/* <Card.Title>FONTS</Card.Title> */}
                {/* <Card.Divider /> */}
                <Text style={{fontSize:14, fontWeight: '600', paddingLeft:10}}>{totaluser}</Text>
                <Text>Total User</Text>
                <AnimatedCircularProgress
                size={150}
                width={13}
                fill={totaluser}
                duration={2000}
                tintColor="#477998"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#E0DFD5" >
                {
                    () => (
                    <Text>
                        { totaluser  } <Zocial name="persona" size={22} />
                    </Text>
                    )
                }
                </AnimatedCircularProgress>
                </Card>

                <Card containerStyle={{ marginTop: 15 }}>
                {/* <Card.Title>FONTS</Card.Title> */}
                {/* <Card.Divider /> */}
                <Text style={{fontSize:14, fontWeight: '600', paddingLeft:10}}>{adminC}</Text>
                <Text>Admin</Text>
                <AnimatedCircularProgress
                size={150}
                width={13}
                fill={adminC*10}
                duration={2000}
                tintColor="#F71735"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#E0DFD5" >
                {
                    () => (
                    <Text>
                        <Fontisto name="person" size={24}  />
                    </Text>
                    )
                }
                </AnimatedCircularProgress>
                </Card>
            </View>

            <View>

                {/* verificaton n ongoing */}
                <View style={{flexDirection: 'row'}}>
                <Card containerStyle={{ marginTop: 15 }}>
                <Card.Title>Completed Verification Rental</Card.Title>
                <Card.Divider />
                <View style={{flexDirection: 'row'}}>
                <AnimatedCircularProgress
                size={150}
                width={13}
                fill={100 - (registeredAccNum-verifiedNum)}
                duration={2000}
                tintColor="#D56F3E"
                // onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#E0DFD5" >
                {
                    (verification) => (
                    <Text>
                        { Math.round(verification)  }% <FontAwesome5 name="house-user" size={22} color={'green'} />
                    </Text>
                    )
                }
                </AnimatedCircularProgress>
                <View style={{justifyContent: 'center', paddingLeft: 10}}>
                    <Text>Verified : {verifiedNum}</Text>
                    <Text>Added Rental : {registeredAccNum}</Text>
                </View>

                </View>

                {/* //ongoing rental */}
                <Card.Divider style={{marginTop: 15}} />
                    <View style={{alignItems: 'center'}}>
                    
                    <Text style={{fontWeight: 'bold', marginTop: 5, marginBottom: 10}}>Verified Rental</Text>    
                    <View style={{flexDirection: 'row'}}>
                        <AnimatedCircularProgress
                        size={150}
                        width={13}
                        fill={verifiedNum}
                        duration={2000}
                        tintColor="#F4FF52"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#E0DFD5" >
                        {
                            () => (
                            <Text style={{fontSize: 18}}>
                                { verifiedNum } <MaterialIcons name="apartment" size={20}/>
                            </Text>
                            )
                        }
                        </AnimatedCircularProgress>
                        <View style={{justifyContent: 'center', paddingLeft: 10}}>
                            <Text>Verified : {verifiedNum}</Text>
                            {/* <Text>Available rental : {registeredAccNum-rentalAgreement}</Text> */}
                            {/* <Text>Rental Agreement : {rentalAgreement}</Text> */}
                        </View>
                    </View>
                    </View>
                </Card>

                {/* fill the remainingg spaces here */}
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                        source= {{ uri : 'https://picsum.photos/500/530'}}
                        style={{width: 550, height: '80%', }}  />
                </View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default CardForUsers

const styles = StyleSheet.create({})
