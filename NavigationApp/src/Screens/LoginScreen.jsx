import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Enter Name" onChangeText={setName} />
      <Button
        title="Login"
        onPress={() => navigation.replace('MainApp', { username: name })}
      />
    </View>
  );
};

export default LoginScreen;
