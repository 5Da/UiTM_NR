import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native'

const DATA = [
    {id: 1, text: 'Item one'},
    {id: 2, text: 'Item two'},
    {id: 3, text: 'Item three'},
    {id: 4, text: 'Item four'},
]

const Edit = () => {
    const [data, setData] = useState(DATA)
    const [isRender, setIsRender] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [inputText, setInputText] =useState()
    const [editItem, setEditItem] = useState()
    
    const onPressItem = (item) => { 
        setIsModalVisible(true)
        setInputText(item.text)
        setEditItem(item.id)
    }
    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity key = {index}
                style={styles.item}
                onPress= {() => onPressItem(item)}
            > 
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }
    const handleEditItem = (editItem) => {
        const newData = data.map(item => {
            if(item.id == editItem)
                {item.text = inputText
                return item}
            return item
            })
            setData(newData)
            setIsRender(!isRender)
    }
    const onPressSaveEdit = () => {
        handleEditItem(editItem)
        setIsModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data ={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem ={renderItem}
                extraData={isRender}
            />
            <Modal
                animationType= 'fade'
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.text}>Change Text: </Text>
                    <TextInput 
                        onChangeText={(text) => setInputText(text) }
                        defaultValue={inputText}
                        editable={true}
                        multiline={false}
                        macLength={200}
                    />
                    <TouchableOpacity
                        onPress={() => onPressSaveEdit()}
                        style={styles.touchableSave}
                    >
                        <Text style={styles.text}>
                            Save
                        </Text>
                        
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default Edit

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'flex-start',
    },
    text: {
        marginVertical: 30,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    textInput: {
        width: '90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 25,
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableSave: {
        backgroundColor: 'orange',
        paddingHorizontal: 100,
        alignItems: 'center',
        marginTop: 20,
    }, 
})
