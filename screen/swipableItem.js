import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'

const TestScreen = () => {
    return (
        <SafeAreaView>
            <Button />
            <Button />
            
        <ListItem.Swipeable style={{}}
            leftContent={
            <Button 
            title="Info"
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
            />
            }
            rightContent={
            <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 4, backgroundColor: 'pink'}}>
                <Button 
                    // title="Edit"
                    icon={{ name: 'edit', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'blue' }} />
                <Button 
                    // title="Delete"
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }} />
                
            </View>
            }
        >
            <Icon name="call" type="ionicons" style={{marginRight:10}} />
            <ListItem.Content>
                <ListItem.Title>Hello Swiper</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem.Swipeable>
        </SafeAreaView>
    )
}

export default TestScreen

const styles = StyleSheet.create({})
