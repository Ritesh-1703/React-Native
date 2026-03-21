import React from 'react';
import { Text, View } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { student } = route.params || {};
  const { name, age } = student || {};

  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Details about the student will be displayed here.</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

export default ProfileScreen;
