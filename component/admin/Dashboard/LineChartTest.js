import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit'
const screenWidth = Dimensions.get("window").width * 90/100;

const chartConfig = {
    backgroundColor: "#96C0B7",
    backgroundGradientFrom: "#96C0B7",
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: "#96C0B7",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(0, 81, 204, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0,
  };

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [20, 45, 28, 80, 64, 43, 55, 66, 8, 20, 7, 16],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rental Agreement"] // optional
  };

const LineChartTest = () => {
    return (
        <View style= {{marginBottom: 20}}>
            
        <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        style={{borderRadius: 16}}
  
        />
        </View>
            )
}

export default LineChartTest

const styles = StyleSheet.create({})
