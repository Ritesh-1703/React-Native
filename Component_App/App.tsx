import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Counter from './src/Counter';
import Example from './src/UseEffect';
import Example2 from './src/UseRef';
import StylingExample from './src/Styling/StylingExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>State Management</Text>
      <Counter />
      {/* <Example />
      <Example2 /> */}
      <StylingExample />
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
