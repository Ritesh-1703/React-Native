import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InlineStyling from './InlineStyling';
const StylingExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is an example of Style Sheet Api</Text>
      <InlineStyling style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ba30c4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 18,
  },
});
export default StylingExample;
