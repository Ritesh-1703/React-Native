import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
const PixelRatioExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pixel Ration</Text>
      <Text style={styles.text}>
        Pixel Density: {PixelRatio.get()}
        Pixel Size: {PixelRatio.roundToNearestPixel(10)}
      </Text>
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
  },
});

export default PixelRatioExample;
