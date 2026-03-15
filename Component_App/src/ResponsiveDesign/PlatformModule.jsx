import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const PlatformModule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform Module</Text>
      <Text style={styles.text}>Running PlatForm:- {Platform.OS}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: Platform.OS === 'ios' ? 'blue' : 'green',
  },
});

export default PlatformModule;
