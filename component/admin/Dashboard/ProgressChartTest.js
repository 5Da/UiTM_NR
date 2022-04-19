// import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit';
import { useTheme } from 'react-native-elements';
// import { useTheme } from 'react-native-paper';
const screenWidth = Dimensions.get("window").width * 90/100+40;

const ProgressChartTest = () => {
    const { colors } = useTheme();
    const data = {
      labels: [
        "Typescipt",
        "Firebase",
        "JavaScript",
      ], // optional
      data: [0.05, 0.5, 0.9,],
      colors: [
        "rgba(19, 79, 201, 1)",
        "rgba(243, 0, 32, 1)",
        "rgba(255, 221, 0, 1)",
      ],
    };

    return (
        <View style={{marginBottom: 20,}}>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={180}
        strokeWidth={15}
        hasLegend={true}
        withCustomBarColorFromData={true}
        radius={33}
        chartConfig={{
          backgroundGradientFromOpacity: 0.6,
          backgroundGradientToOpacity: 0.3,
          backgroundColor: 'blue',
          backgroundGradientFrom: '#9B97B2',
          backgroundGradientTo: '#725752',
          propsForLabels: { fill: Platform.OS === 'web' ? 'white' : 'black' },
          decimalPlaces: 2,
          color: (opacity = 1, _index) => `rgba(155,151,178,${opacity})`,
        }}
        style={{ borderRadius: 10,}}
        hideLegend={false}
      />
    </View>
    )
}

export default ProgressChartTest

const styles = StyleSheet.create({})
