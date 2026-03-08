import React, { useRef } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Example2() {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <View style={styles.container}>

            <TextInput
                ref={inputRef}
                placeholder="Enter your name"
                style={styles.input}
            />

            <Button
                title="Focus Input"
                onPress={focusInput}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        padding: 10,
        marginBottom: 20,
    }
});