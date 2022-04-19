// import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { PieChart } from 'react-native-chart-kit';
// import { useTheme } from 'react-native-paper';
const screenWidth = Dimensions.get("window").width * 90/100;

const chartConfig = {
  backgroundColor: "black",
  // backgroundGradientFrom: "#FFFFFF",
  // backgroundGradientTo: "#FFFFFF",
  decimalPlaces: 2, // optional, defaults to 2dp
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

const PieChartTest = ({tenantC, landlordC, adminC}) => {
  const data = [
    {
      name: "Tenant",
      population: tenantC,
      color: "#0a23a3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Landlord",
      population: landlordC,
      color: "#08c928",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Admin",
      population: adminC,
      color: "#aa18ea",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    
  ];

    return (
        <View style={{marginBottom: 30}} >
      
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"#b6bbd4"}
          paddingLeft={"15"}
          center={[10, 10]}
          absolute
          style={{borderRadius: 16}}
        />
        </View>
    )
}

export default PieChartTest

const styles = StyleSheet.create({})
