import React from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/home/ListAccommodation'
import Landlord from '../component/Landlord'
import { SpeedDial } from 'react-native-elements'

const saved = true
// change tenant status to view tenant property screen or landlord
// const statusTenant = false
const image = { uri : 'https://vectorseek.com/wp-content/uploads/2021/02/UiTM-Logo-Vector.jpg'}

const speedDial = ({open, setOpen}) => (
    <SpeedDial 
    style={{bottom: '13%'}}
    color= {'#465362'}
    isOpen={open}
    icon={{ name: 'plus', type: 'feather', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                >
                <SpeedDial.Action
                    color= {'#465362'}
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add New Tenancy Agreement"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    color= {'#465362'}
                    icon={{ name: 'edit', color: '#fff' }}
                    title="Edit Agreement"
                    onPress={() => console.log('Edit Something')}
                    />
    </SpeedDial>
)

const PropertyScreen = ({navigation, route}) => {
    const [open, setOpen] = React.useState(false)
    return (
        <ImageBackground source={image}  style={styles.image} >
        <SafeAreaView style={styles.container}>
                <Header />
                <ScrollView >
                {/* {console.log(route)} */}
                    { route.params.userType === 'Tenant' ? <ListAccommodation save ={saved} navigation={navigation}/> : <Landlord navigation={navigation}/>}
                <View style={{marginBottom: 50}}/>
                </ScrollView>
                {/* { statusTenant ? null : speedDial({open,setOpen}) } */}
                { route.params.userType === 'Tenant' ? null : speedDial({open,setOpen})}
                

                <BottomTabs icons ={bottomTabIcons} navigation={navigation}/>
        </SafeAreaView>
        </ImageBackground>    

    )
}

export default PropertyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
})
