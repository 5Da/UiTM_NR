import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const { width } = Dimensions.get('window')
const height= width * 0.7


export default class Slider extends React.Component {
    state ={active: 0}
    change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== this.state.active){
            this.setState({active: slide})
        }
    }
    render({data}){
    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={this.change}
                scrollEventThrottle= {1}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
            >
            {
                data.map((data, index) => (
                    <Image
                        key={index}
                        source={{uri: image}}
                        style={styles.image}
                    />

                ))
            }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    data.map((i,k) => (
                        <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}>•</Text>
                    ))

                }

            </View>
        </View>
    )}
}


const styles = StyleSheet.create({
    container: { 
        // marginTop: 30, 
        width,
        height,
    },
    scroll: {
        width,
        height,
    },
    image: { 
        width,
        height,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row', 
        position: 'absolute',
        bottom: 0, 
        alignSelf: 'center',  
    },
    pagingText: {
        // fontSize: (width / 30),
        color: '#888', 
        margin: 3,
    },
    pagingActiveText: {
        // fontSize: (width / 30),
        color: '#fff',
        margin: 3,
    },
})
