import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const device_width = Dimensions.get('window').width
const device_height = Dimensions.get('window').height
const handleOnClose = () => setShowModal(false);

const SimpleModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        
        <View>
            <Modal
            isEdit={isEdit}
            note={note}
            visible={showModal}
            onClose={handleOnClose}
            onSubmit={handleUpdate}
            />

            <Text style={{fontSize: 20}}> Sample Title Modal </Text>
        
            <TouchableOpacity
            onPress={() => setIsModalVisible(!isModalVisible)}
            >
            <Text> Close Modal</Text>
        </TouchableOpacity>
            
        </View>
    )
}

export default SimpleModal

const styles = StyleSheet.create({})
