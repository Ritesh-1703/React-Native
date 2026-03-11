import React from 'react';
import { View, Text } from 'react-native';
import FlexBoxLayout from '../FlexBoxLayout';
const InlineStyling = () => {
  return (
    <View>
      <Text style={{ flex: 1, color: 'blue' }}>
        This is example on in line styling.
      </Text>
      <FlexBoxLayout />
    </View>
  );
};

export default InlineStyling;
