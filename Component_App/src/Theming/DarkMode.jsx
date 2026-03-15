import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const DarkMode = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? 'black' : 'white' },
      ]}
    >
      <Text>DarkMode Example</Text>
      <Text style={{ color: isDark ? 'white' : 'black' }}>
        The current theme is {theme}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DarkMode;
