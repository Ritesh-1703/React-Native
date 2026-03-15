import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CompleteExample() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },

  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },

  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
  },
});
