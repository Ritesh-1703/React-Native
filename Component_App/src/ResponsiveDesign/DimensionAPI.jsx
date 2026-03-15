import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const DimensitionAPI = () => {
  return (
    <View>
      <Text>Dimensition API</Text>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: width * 0.8,
    height: height * 0.2,
    backgroundColor: 'skyblue',
    marginTop: 20,
  },
});

export default DimensitionAPI;
