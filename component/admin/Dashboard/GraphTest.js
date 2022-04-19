import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
const chartConfig2 = {
  backgroundColor: "black",
  // backgroundGradientFrom: "#FFFFFF",
  // backgroundGradientTo: "#FFFFFF",
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#16324F"
  }
}

const GraphTest = () => {
    return (
        <View style={{marginBottom: 20}}>
 
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width * 90/100} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={chartConfig2}
    bezier
    style={{
      borderRadius: 16
    }}
  />
</View>
    )
}

export default GraphTest

const styles = StyleSheet.create({})
