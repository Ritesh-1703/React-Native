import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import Counter from './src/Counter';
import Example from './src/UseEffect';
import Example2 from './src/UseRef';
import StylingExample from './src/Styling/StylingExample';
import CompleteExample from './src/Styling/CompleteExample';
import DimensionsAPI from './src/ResponsiveDesign/DimensionAPI';
import PlatformExample from './src/ResponsiveDesign/PlatformModule';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>State Management</Text>
      <Counter /> */}
      {/* <Example />
      <Example2 /> */}
      {/* <StylingExample /> */}
      <CompleteExample />
      <DimensionsAPI />
      <PlatformExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
