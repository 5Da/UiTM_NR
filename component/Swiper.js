import React, { useRef } from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
// const width = 500
// console.log(width)
// const height = width * 0.7

export default function Swiper({data}) {
    // console.log(data)
    const scrollValue = useRef(new Animated.Value(0)).current;
    const translateX = scrollValue.interpolate({
        inputRange: [0, width],
        outputRange: [0, 20],
    
    });
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.card}
                horizontal
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                    { useNativeDriver: false },
                )}>
                {data.map(data => (
                    <Image 
                        source= {{ uri : data}}
                        style={styles.card} key={data} />
                ))}
            </ScrollView>
            <View style={styles.indicatorContainer} pointerEvents="none">
                {data.map(x => (
                    <Indicator x={x} key={x} />
                ))}
                <Animated.View
                    style={[
                        styles.activeIndicator,
                        { position: 'absolute', transform: [{ translateX }] },
                    ]}
                />
            </View>
        </View>
    );
}

function Indicator() {
    return <View style={width<200 ? null : styles.indicator} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        // tukar width
        width,
        height: 250,
        // marginHorizontal: 5,
        borderRadius: 5,
        // resizeMode: 'cover',
    },
    indicatorContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        // left: 30,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#00000044',
        marginHorizontal: 5,
    },
    activeIndicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
});

