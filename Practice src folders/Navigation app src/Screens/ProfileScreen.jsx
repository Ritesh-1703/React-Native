import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ route }) {
  const { name, age } = route.params;
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}
