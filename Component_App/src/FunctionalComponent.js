import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FunctionalComponent() {
    return (
        <View style={styles.container}>
            <Text>Welcome to React Native</Text>
        </View>
    );
}

export default FunctionalComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
}); 