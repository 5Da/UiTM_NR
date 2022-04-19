import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SupportScreen = () => {
  return (
    <View>
      <Text style={[styles.heading, {borderBottomWidth: 0.5}]}>Support </Text>

      <Text style={styles.heading}>Tenant</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

      <Text style={styles.heading}>Landlord</Text>
      <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: '800',
        margin: 4,
        // borderBottomWidth: 1,
    },
    content: {
        backgroundColor: 'white',
        margin: 4,
        padding: 6,
        borderRadius: 5,
    }
});
