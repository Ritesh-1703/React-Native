import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BasicNavigation from './src/BasicNavigation';
export default function App() {
  return (
    <View>
      <BasicNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
