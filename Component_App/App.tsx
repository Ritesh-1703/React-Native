import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Counter from './src/Counter';
import Example from './src/UseEffect';
import Example2 from './src/UseRef';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>State Management</Text>
      <Counter />
      <Example />
      <Example2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
