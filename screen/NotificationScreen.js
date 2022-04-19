import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';

const NotificationScreen = () => {
      const [isSwitchOn, setIsSwitchOn] = React.useState(false)
      const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
  return (
    <View>
      <Text style={styles.heading}>Notification</Text>
      <View style={{flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', marginTop: 4, marginBottom: 4}}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{marginTop: 5, marginBottom: 5, marginLeft: 5}}>Push Notification</Text>
        </View>
        
          <View >
            <Switch style={{marginTop: 5, marginBottom: 5, marginRight: 5}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitchOn ? "#16324F" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onToggleSwitch}
            value={isSwitchOn}
            />
          </View>
        </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  heading: {
    margin: 5,
    fontSize: 24,
    fontWeight: '800',
  },
});
