import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Ram', age: 25 })}
      />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
