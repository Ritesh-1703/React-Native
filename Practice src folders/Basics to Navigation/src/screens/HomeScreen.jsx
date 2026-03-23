import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const students = [
    { id: 1, name: 'Dhoni', age: 40 },
    { id: 2, name: 'Rohit', age: 35 },
    { id: 3, name: 'Virat', age: 34 },
  ];
  const username = route.params?.username;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Welcome, {username}</Text>
      {students.map(student => (
        <Button
          key={student.id}
          title={student.name}
          onPress={() => navigation.navigate('Profile', { student })}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
