import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FunctionalComponent from './src/FunctionalComponent';
import ClassComponent from './src/ClassComponent';
import Greeting from './src/Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Components Examples</Text>
      <Greeting name="Rohit" />
      <FunctionalComponent />
      <ClassComponent />
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
