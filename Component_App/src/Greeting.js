import React from "react";
import { Text, StyleSheet } from "react-native";

function Greeting({ name }) {
    return (
        <Text>Hello {name}</Text>
    )
}

Greeting.prototype = {
    name: PropTypes.string
}

Greeting.defaultProps = {
    name: 'Guest'
}


export default Greeting;