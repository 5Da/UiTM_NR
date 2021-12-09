import React from 'react'
import { ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'
import Landlord from '../component/Landlord'
import { SpeedDial } from 'react-native-elements'

const saved = true
// change tenant status to view tenant property screen or landlord
const statusTenant = true
const image = { uri : 'https://vectorseek.com/wp-content/uploads/2021/02/UiTM-Logo-Vector.jpg'}

const speedDial = ({open, setOpen}) => (
    <SpeedDial 
    style={{bottom: '13%'}}
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
                    title="Add New Tenancy Agreement"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    color= {'blue'}
                    icon={{ name: 'edit', color: '#fff' }}
                    title="Edit Agreement"
                    onPress={() => console.log('Edit Something')}
                    />
    </SpeedDial>
)

const PropertyScreen = ({navigation}) => {
    const [open, setOpen] = React.useState(false)
    return (
        <ImageBackground source={image}  style={styles.image} >
        <SafeAreaView style={styles.container}>
                <Header />
                <ScrollView >
                    {statusTenant ? <ListAccommodation save ={saved} navigation={navigation}/> : <Landlord navigation={navigation}/>}
                <View style={{marginBottom: 50}}/>
                </ScrollView>
                { statusTenant ? null : speedDial({open,setOpen}) }
                <View style={{flex: 1, backgroundColor : 'red'}} />
                <View style={{flex: 1, backgroundColor : 'red'}} />
                <View style={{flex: 1, backgroundColor : 'red'}} />
                <View style={{flex: 1, backgroundColor : 'red'}} />
                <View style={{flex: 1, backgroundColor : 'red'}} />
                <View style={{flex: 1, backgroundColor : 'red'}} />

                <BottomTabs icons ={bottomTabIcons} navigation={navigation}/>
        </SafeAreaView>
        </ImageBackground>    

    )
}

export default PropertyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
})
