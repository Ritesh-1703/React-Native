import React from "react";
import { View, Text, StyleSheet } from "react-native";


class ClassComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to React Native Class Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default ClassComponent;