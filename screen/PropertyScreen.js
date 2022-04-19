import React from 'react'
import { ImageBackground, Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text} from 'react-native'
import BottomTabs, { bottomTabIcons } from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import ListAccommodation from '../component/property/ListAccommodation2'
import Landlord from '../component/Landlord'
import { SpeedDial } from 'react-native-elements'
import DocumentPick2 from '../component/DocumentPick2'

// change tenant status to view tenant property screen or landlord
// const statusTenant = false
const image = { uri : 'https://vectorseek.com/wp-content/uploads/2021/02/UiTM-Logo-Vector.jpg'}

const speedDial = ({open, setOpen, setModalVisible,modalVisible}) => (
    <SpeedDial 
    style={{bottom: '8%'}}
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
                    onPress={() => setModalVisible(!modalVisible)}
                />
                <SpeedDial.Action
                    color= {'#465362'}
                    icon={{ name: 'edit', color: '#fff' }}
                    title="Edit Agreement"
                    onPress={() => console.log('Edit Something')}
                    />
    </SpeedDial>
)

const AddTenancyAgreementDoc = (modalVisible) => (
    ""
)

const PropertyScreen = ({navigation, route}) => {
    const [open, setOpen] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <ImageBackground source={image}  style={styles.image} >
        <SafeAreaView style={styles.container}>
                <Header navigation={navigation} />
                <ScrollView >
                    {/* {console.log(route)} */}
                    { route.params.userType === 'Tenant' ? <ListAccommodation navigation={navigation}/> : <Landlord navigation={navigation} userType={route.params.userType}/>}

                </ScrollView>
                { route.params.userType === 'Tenant' ? null : speedDial({open,setOpen, setModalVisible,modalVisible})}
                {route.params.userType === 'Landlord'? 
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tenancy Agreement</Text>

                        <DocumentPick2 setModalVisible={setModalVisible}/>

                    </View>
                    </View>
                </Modal> : null}
                {/* <View style={{marginBottom: 50}}/> */}
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
