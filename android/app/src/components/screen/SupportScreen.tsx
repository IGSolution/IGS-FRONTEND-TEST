import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SupportScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Support Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
