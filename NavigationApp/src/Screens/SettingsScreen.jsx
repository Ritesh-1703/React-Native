import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const SettingsScreen = () => {
  const [dark, setDark] = useState(false);
  return (
    <View>
      <Text>Settings Screen</Text>
      <Text>Settings and preferences will be displayed here.</Text>
      <Text style={{ color: dark ? 'white' : 'black' }}>Theme Settings</Text>
      <Button title="Toggle theme" onPress={() => setDark(!dark)} />
    </View>
  );
};

export default SettingsScreen;
