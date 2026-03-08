import React, { useEffect } from "react";
import { View, Text, Alert } from "react-native";

export default function Example() {

    useEffect(() => {
        Alert.alert("Component Mounted");
    }, []);

    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}