import React from 'react';
import { useState } from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseStateExample;
