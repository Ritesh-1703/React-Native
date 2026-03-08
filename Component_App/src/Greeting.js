import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

function Greeting({ name }) {
    return (
        <Text>Hello {name}</Text>
    )
}

Greeting.propTypes = {
    name: PropTypes.string
}
Greeting.defaultProps = {
    name: 'Guest'
}


export default Greeting;